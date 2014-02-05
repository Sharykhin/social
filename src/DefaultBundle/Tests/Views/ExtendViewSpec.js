define(['jquery','src/DefaultBundle/Views/ExtendView','public/assets/js/jquery.ui.widget','public/assets/js/metro-core'],function($,ExtendView){
    describe('Testing ExtendView View',function(){
        var extendView;

        beforeEach(function(){
            extendView = new ExtendView();
        });

        it('should be defined',function(){
            expect(extendView).toBeDefined();
        });

        it('should contain "title" property',function(){
            expect(extendView.title).toBeDefined();
        });

        it('should contain "title_selector" property',function(){
            expect(extendView.title_selector).toBeDefined();
            expect(extendView.title_selector.length).toBeGreaterThan(0);
        });

        it('should return itself after call method "showContent"',function(){
           expect(extendView.showContent({a:5})).toBeFalsy();
           expect(extendView.showContent("<h1>hello world</h1>")).toEqual(extendView);
        });

        it('should contain "changeTitle" and title must be string',function(){
            expect(extendView.changeTitle('title')).toBeUndefined();
            expect(extendView.changeTitle({a:5})).toBeFalsy();
        });

        it('should contain "remove" method',function(){
            expect(extendView.remove()).toBeTruthy();
        });



    });
});