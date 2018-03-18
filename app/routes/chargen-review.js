import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRoute from 'ares-webportal/mixins/authenticated-route';
import RouteResetOnExit from 'ares-webportal/mixins/route-reset-on-exit';

export default Route.extend(AuthenticatedRoute, RouteResetOnExit, {
    gameApi: service(),
    titleToken: 'Character Review',

    model: function() {
        let api = this.get('gameApi');
        return api.requestOne('chargenReview', {}, 'chargen');
    }
});