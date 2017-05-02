// https://www.bennadel.com/blog/3147-creating-an-event-driven-pre-bootstrap-loading-screen-in-angular-2-0-0.htm
// https://www.bennadel.com/blog/3151-revisited-creating-an-event-driven-pre-bootstrap-loading-screen-in-angular-2-0-0.htm

// import the core angular services
import { DOCUMENT } from "@angular/platform-browser";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable()
export class AppReadyEvent {

    private doc: Document;
    private isAppReady: boolean;

    // initialize the service
    // --
    // NOTE: When I first tried to approach this problem, I was going to try and use the
    // core Renderer service; however, it appears that the Renderer cannot be injected
    // into a service object (throws error: No provider for Renderer!). As such, I am
    // treating THIS class as the implementation of the DOM abstraction (so to speak),
    // which can be overridden on a per-environment basis.
    constructor( @Inject( DOCUMENT ) doc: any ) {
        this.doc = doc;
        this.isAppReady = false;
    }

    // ---
    // PUBLIC METHODS
    // ---

    // trigger the "appReady" event
    // --
    // NOTE: In this particular implementation of this service on this PLATFORM, this
    // simply triggers the event on the DOM (Document Object Model); however, one could
    // easily imagine this event being triggered on an Observable or some other type of
    // message transport that makes more sense for a different platform. Nothing about
    // the DOM-interaction leaks outside of this service.
    public trigger() : void {

        console.log("AppReadyEvent.trigger - isAppReady: " + this.isAppReady);

        // If the app-ready event has already been triggered, just ignore any subsequent calls to trigger it again.
        if ( this.isAppReady ) {
            return;
        }

        var bubbles = true;
        var cancelable = false;

        this.doc.dispatchEvent( this.createEvent( "appReady", bubbles, cancelable ) );
        this.isAppReady = true;

    }


    // ---
    // PRIVATE METHODS
    // ---

    // create and return a custom event with the given configuration
    private createEvent(
        eventType: string,
        bubbles: boolean,
        cancelable: boolean
        ) : Event {

        // IE uses some other kind of event initialization
        // default to trying the "normal" event generation and then fallback to using the IE version
        try {
            console.log("createEvent: attempting standard event definition");
            var customEvent: any = new CustomEvent(
                eventType,
                {
                    bubbles: bubbles,
                    cancelable: cancelable
                }
            );

        } catch ( error ) {
            console.log("createEvent: standard event definition failed, trying IE initCustomEvent");
            var customEvent: any = this.doc.createEvent( "CustomEvent" );
            customEvent.initCustomEvent( eventType, bubbles, cancelable, null );
        }
        return( customEvent );
    }
}