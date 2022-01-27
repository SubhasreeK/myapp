import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property ', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.setProperties({
      rental:{
            title:"RMK RajaMaligai",
            owner:"Velusamy",
            city:"Palani",
            location:{
                lat:10.457592,
                lng:77.519820,
            },
            category:"Palace",
            type:"Standalone",
            bedrooms: "25",
            image:'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
      },
    });

    await render(hbs`<Rental @rental={{this.rental}}/>`);

    assert.dom('article').hasClass('rental');
    assert.dom('article h3').hasText('RMK RajaMaligai');
    assert.dom('article .detail.owner').includesText('Velusamy');
    assert.dom('article .image').exists();
  });
});
