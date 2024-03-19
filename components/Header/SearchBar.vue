<template>
  <ais-instant-search index-name="articulos" :search-client="algolia" class="Ais_search"
                      :future="{ preserveSharedStateOnUnmount: true }">
    <ais-search-box>
      <template v-slot="{ currentRefinement, isSearchStalled, refine }">
        <div class="input_Search_Container">
          <font-awesome-icon icon="fa-solid fa-search" class="icono"/>
          <input
              type="search"
              class="form-control"
              :value="currentRefinement"
              @input="refine($event.currentTarget.value); query = $event.currentTarget.value"
          >
          <span :hidden="!isSearchStalled">Cargando  ...</span>
        </div>
      </template>
    </ais-search-box>
    <ais-hits v-if="query !== ''" v-click-outside="clickOutsideResults"
              :class-names="{
          'ais-Hits': 'results-search',
           'ais-Hits-list': 'results-search_ol',
           'ais-Hits-item': 'itemsList',
           }">
      <template v-slot:item="{ item }">
        <div class="containerItemsList" @click="redirectProduct(item.URL)">
            <img :src="item.image" alt="" class="img-search">
            <div>
              <p class="m-0 text-middle fw-bold p-0">{{ item.name ? item.name : item.DESC_ARTICULO }}</p>
              <p class="m-0 text-middle p-0">{{ showAmount(item.price_with_tax) }}</p>
            </div>
        </div>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>

<script>
import {AisInstantSearch, AisSearchBox, AisHits} from 'vue-instantsearch/vue3/es'
import { useRouter } from 'vue-router';
export default {
  name: "SearchBar",
  components: {
    AisInstantSearch,
    AisSearchBox,
    AisHits
  },
  setup() {
    const algolia = ref(useAlgoliaRef())
    const query = ref('')
    const localePath = useLocalePath()

    const router = useRouter();

    const clickOutsideResults = () => {
      query.value = ''
    }

    const redirectProduct = (slug) => {
      clickOutsideResults()
      router.push(
          localePath({name: "product-slug", params: {slug: slug}}, )
      );
    }

    return {
      algolia,
      query,
      clickOutsideResults,
      redirectProduct
    }
  }
}
</script>

<style>
.Ais_search {
  width: 100%;
  position: relative;
}

.input_Search_Container {
  position: relative;
}

.input_Search_Container .icono {
  width: 20px;
  left: 12px;
  position: absolute;
  top: 10px;
}

.input_Search_Container input {
  padding-left: 35px;
}

.form-control:focus {
  border: 1px solid black;
  box-shadow: none;
}

.results-search {
  width: 100%;
  position: absolute;
  overflow: auto;
}

.results-search::-webkit-scrollbar {
  width: 6px;
}

.results-search::-webkit-scrollbar-thumb {
  background: #f8e433;
  border-radius: 10px;
}

.results-search::-webkit-scrollbar-track {
  background: #fff;
}

.results-search_ol {
  height: 32em;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0;
}

.itemsList {
  width: 100%;
  padding: 0.4rem;
  margin: 0;
  background: #fff;
  border: 0;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, .05), 0 1px 3px 0 rgba(35, 38, 59, .15);
}

.itemsList:hover {
  background-color: #f8e433;
  cursor: pointer;
}

.containerItemsList {
  display: flex;
  align-items: center;
  gap: 5px;
}


.img-search {
  height: 4rem;
  object-fit: contain;
  width: 4rem;
}
</style>