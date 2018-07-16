import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class PlatformDetectorService {
    constructor(@Inject(PLATFORM_ID) private platformId: string) {}

    isPlatformBrowser(): boolean {
        return isPlatformBrowser(this.platformId);
    }
}