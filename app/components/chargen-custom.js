import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  didInsertElement: function() {
    let self = this;
    this.set('updateCallback', function() { return self.onUpdate(); } );
  },
  
  onUpdate: function() {
    // Return a hash containing your data.  Character data will be in 'char'.  For example:
    // 
    // return { goals: this.get('char.custom.goals') };
    return { powers: this.get('char.custom.powers'), skills: this.get('char.custom.skills'), resources: this.get('char.custom.resources'), drawbacks: this.get('char.custom.drawbacks') }
  }
});
