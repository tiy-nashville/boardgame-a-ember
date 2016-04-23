import ApplicationAdapter from './application';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default ApplicationAdapter.extend(DataAdapterMixin, {
  authorizer: `authorizer:application`,
  host: `https://boardmeeting-api.herokuapp.com`,
});
