"use strict";
/* tslint:disable:no-unused-variable */
var kenteken_component_1 = require('./kenteken.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
////////  SPECS  /////////////
/// Delete this
describe('Smoke test', function () {
    it('should run a passing test', function () {
        expect(true).toEqual(true, 'should pass');
    });
});
describe('AppComponent with TCB', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [kenteken_component_1.KentekenComponent] });
    });
    it('should instantiate component', function () {
        var fixture = testing_1.TestBed.createComponent(kenteken_component_1.KentekenComponent);
        expect(fixture.componentInstance instanceof kenteken_component_1.KentekenComponent).toBe(true, 'should create AppComponent');
    });
    it('should have expected <h1> text', function () {
        var fixture = testing_1.TestBed.createComponent(kenteken_component_1.KentekenComponent);
        fixture.detectChanges();
        var h1 = fixture.debugElement.query(function (el) { return el.name === 'h1'; }).nativeElement; // it works
        h1 = fixture.debugElement.query(platform_browser_1.By.css('h1')).nativeElement; // preferred
        expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
    });
});
//# sourceMappingURL=kenteken.component.spec.js.map