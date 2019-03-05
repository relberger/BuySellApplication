'use strict';

describe('AdService', function ()
{
    beforeEach(module('adModule'));

    it('should create an `ads` model with 10 ads', inject(function ($controller)
    {
        var scope = {};
        var ctrl = $controller('AdService', { $scope: scope });

        expect(scope.ads.length).toBe(3);
    }));
});