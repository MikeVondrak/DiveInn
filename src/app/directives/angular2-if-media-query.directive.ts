// http://blog.radiant3.ca/2016/11/21/angular2-directive-responsive-conditional-output-using-css-media-query/
// https://gist.github.com/davidmarquis/80e6d1ada3a024022f985a587b587825

import { Directive, TemplateRef, ViewContainerRef, ChangeDetectorRef } from "@angular/core";
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
  private changeDetRef: ChangeDetectorRef;

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<Object>, private changeDetectionRef: ChangeDetectorRef) {
    this.changeDetRef = changeDetectionRef;
  }

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
    
    console.log("onMediaMatchChange: " + matches);
    
    // check if media query condition met and was previously false or is not met and previously true
    if (matches && (this.isBlank(this.prevCondition))) {
      this.prevCondition = true;
      this.viewContainer.createEmbeddedView(this.templateRef);    // add ngIfMediaQuery element to dom
      this.changeDetRef.detectChanges();                          // manually detect changes in case of non-angular (e.g. window resize) events to repopulate date in template
      
    } else if (!matches && (!this.isBlank(this.prevCondition))) {
      this.prevCondition = false;
      this.viewContainer.clear();   // remove ngIfMediaQuery element from the dom
    }
  }
  private isBlank(x: boolean) {
    return(!x);
  }
}