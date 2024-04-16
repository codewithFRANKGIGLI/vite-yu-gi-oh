import { reactive } from 'vue'
import axios from 'axios';

export default {
    data() {
      return {
        base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
        cards: null,
        limit: 20,
        offset: 0,
        archetypeSelected: null,
      };
    },
    mounted() {
      axios.get(this.base_url, {
          params: {
            archetype: this.archetypeSelected,
            offset: this.offset,
            num: this.limit,
          },
        })
       .then(response => {
          this.cards = response.data.data;
        })
       .catch(error => {
          console.error(error);
        });
    },
  };