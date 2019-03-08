'use strict';

describe('AdListController', function ()
{
    beforeEach(module('buySellApp'));

    it('should create an `ads` model with 10 ads', inject(function ($controller)
    {
        var scope = {};
        var ctrl = $controller('AdListController', { $scope: scope });

        expect(scope.ads.length).toBe(10);
    }));
});