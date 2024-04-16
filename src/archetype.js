import { reactive } from 'vue';
import axios from 'axios';

export default {
    data() {
      return {
        base_url: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
        listsArchetype: null,
      };
    },
    mounted() {
      axios.get(this.base_url)
       .then(response => {
          this.listsArchetype = response.data;
        })
       .catch(error => {
          console.error(error);
        });
    },
  };