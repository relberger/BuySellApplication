﻿'use strict';

describe('AdListController', function ()
{
    beforeEach(module('BuySellApp'));

    it('should create an `ads` model with 10 ads', inject(function ($controller)
    {
        var scope = {};
        var ctrl = $controller('BuySellController', { $scope: scope });

        expect(scope.ads.length).toBe(3);
    }));
});