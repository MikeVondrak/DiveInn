// http://blog.radiant3.ca/2016/11/21/angular2-directive-responsive-conditional-output-using-css-media-query/
// https://gist.github.com/davidmarquis/80e6d1ada3a024022f985a587b587825

import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";
//import { isBlank } from "@angular/core/src/facade/lang";


/**
 * How to use this directive?
 *
 * ```
 * <div *ngIfMediaQuery="'(min-width: 500px)'">
 *     Div element will exist only when media query matches, and created/destroyed when the viewport size changes.
 * </div>
 * ```
 */
@Directive({
  selector: '[ngIfMediaQuery]', 
  inputs: ['ngIfMediaQuery']
})
export class NgIfMediaQuery {
  private prevCondition: boolean = null;

  private mql: MediaQueryList;
  private mqlListener: (mql: MediaQueryList) => void;   // reference kept for cleaning up in ngOnDestroy()

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<Object>) {}

  /**
   * Called whenever the media query input value changes.
   */
  set ngIfMediaQuery(newMediaQuery: string) {
    if (!this.mql) {
      this.mql = window.matchMedia(newMediaQuery);

      /* Register for future events */
      this.mqlListener = (mq) => {
        this.onMediaMatchChange(mq.matches);
      };
      this.mql.addListener(this.mqlListener);
    }

    this.onMediaMatchChange(this.mql.matches);
  }

  ngOnDestroy() {
    this.mql.removeListener(this.mqlListener);
    this.mql = this.mqlListener = null;
  }

  private onMediaMatchChange(matches: boolean) {
    // this has been taken verbatim from NgIf implementation
    if (matches && (this.isBlank(this.prevCondition))) { // || !this.prevCondition)) {
      this.prevCondition = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!matches && (!this.isBlank(this.prevCondition))) { // || this.prevCondition)) {
      this.prevCondition = false;
      this.viewContainer.clear();
    }
  }
  private isBlank(x: boolean) {
    return(!x);
  }
}