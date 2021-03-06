/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, OnDestroy } from '@angular/core';
import { MediaMatcher } from './media-matcher';
import { Observable } from 'rxjs/Observable';
/** The current state of a layout breakpoint. */
export interface BreakpointState {
    matches: boolean;
}
/**
 * Utility for checking the matching state of @media queries.
 */
export declare class BreakpointObserver implements OnDestroy {
    private mediaMatcher;
    private zone;
    /**  A map of all media queries currently being listened for. */
    private _queries;
    /** A subject for all other observables to takeUntil based on. */
    private _destroySubject;
    constructor(mediaMatcher: MediaMatcher, zone: NgZone);
    /** Completes the active subject, signalling to all other observables to complete. */
    ngOnDestroy(): void;
    /** Whether the query currently is matched. */
    isMatched(value: string | string[]): boolean;
    /**
     * Gets an observable of results for the given queries that will emit new results for any changes
     * in matching of the given queries.
     */
    observe(value: string | string[]): Observable<BreakpointState>;
    /** Registers a specific query to be listened for. */
    private _registerQuery(query);
}
