<template>
  <main>
    <!-- SECTION 1 -->
    <section class="s-1">
      <div class="wrapper">
        <table>
          <thead>
          <tr>
            <th class="text-right" style="padding-right: 16px">#</th>
            <th class="text-center" style="min-width: 250px">Назва</th>
            <th class="text-center" style="min-width: 96px">Тип</th>
            <th class="text-center" style="min-width: 96px">ЄДРПОУ</th>
            <th class="text-center" style="min-width: 250px">Адреса</th>
            <th class="text-center" style="min-width: 96px">Телефон/Емейл</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="(elem, index) in records">
            <td class="text-right" style="padding-right: 16px">{{ index + 1 }}</td>
            <td>{{ elem.NAME }}</td>
            <td>{{ elem.VUD_NAME }}</td>
            <td>{{ elem.EDRPOU }}</td>
            <td>{{ elem.ADRESS }}</td>
            <td class="text-right">{{ elem.PHONE }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { XMLParser } from 'fast-xml-parser';

const records = ref([]);

onMounted(async () => {
  const response = await fetch('/xml/rgo.xml');
  const xml = await response.text();
  const parser = new XMLParser();
  const result = parser.parse(xml);
  records.value = result?.DATA?.RECORD?.slice(0, 1000) || [];

  // const response = await fetch('/xml/17.3-ex_xml_rgo.xml', {
  //   headers: {
  //     Range: 'bytes=0-1000000' // перші ~1 МБ
  //   }
  // });
  // const xml = await response.arrayBuffer();
  // const decoder = new TextDecoder('windows-1251');
  // const parser = new XMLParser();
  // const result = parser.parse(decoder.decode(xml));
  // records.value = result?.DATA?.RECORD?.slice(0, 1000) || [];
});
</script>

<style scoped lang="scss">
.s-1 {
  padding: 128px 0 160px;
}

.wrapper {
  overflow-x: auto;
}

th, td {
  border-bottom: 1px solid black;
}
</style>