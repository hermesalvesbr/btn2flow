<script setup lang="ts">
import { useApi } from "@directus/extensions-sdk";
import { computed, ref } from "vue";

type Flow = {
  icon: string;
  label: string;
  type: string;
  id: string;
};

type Props = {
  flows: Flow[];
  collection: string;
  primaryKey: string;
};

const api = useApi();
const tooltipId = ref(null);
const success_message = ref("The Flow has triggered successfully");

const props = withDefaults(defineProps<Props>(), {
  flows: () => [],
});

const startFlow = async (id: string, index: number) => {
  try {
    const res = await api.get(`flows/trigger/${id}`);
    if (res) {
      tooltipId.value = index;
      setTimeout(() => {
        tooltipId.value = null;
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="presentation-links">
    <div v-for="(flow, index) in flows" :key="index" class="action_container">
      <v-button
        class="action"
        :class="[flow.type]"
        :secondary="flow.type !== 'primary'"
        :icon="!flow.label"
        @click.stop="startFlow(flow.id, index)"
      >
        <v-icon v-if="flow.icon" left :name="flow.icon" />
        <span v-if="flow.label">{{ flow.label }}</span>
      </v-button>
      <div
        :id="index"
        class="tooltip top end"
        :class="{ visible: tooltipId == index }"
      >
        {{ success_message }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.presentation-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.action {
  position: relative;
}
.action.info {
  --v-button-background-color: var(--blue);
  --v-button-background-color-hover: var(--blue-125);
  --v-button-color: var(--blue-alt);
  --v-button-color-hover: var(--blue-alt);
}

.action.success {
  --v-button-background-color: var(--theme--success);
  --v-button-background-color-hover: var(--success-125);
  --v-button-color: var(--success-alt);
  --v-button-color-hover: var(--success-alt);
}

.action.warning {
  --v-button-background-color: var(--theme--warning);
  --v-button-background-color-hover: var(--warning-125);
  --v-button-color: var(--warning-alt);
  --v-button-color-hover: var(--warning-alt);
}

.action.danger {
  --v-button-icon-color: var(--white);
  --v-button-background-color: var(--theme--danger);
  --v-button-background-color-hover: var(--danger-125);
  --v-button-color: var(--danger-alt);
  --v-button-color-hover: var(--danger-alt);
}
.action_container {
  position: relative;
}
.tooltip {
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  background: #198754;
  transform: translateY(-42px);
  transition: all.3s ease;
  white-space: nowrap;
}
.tooltip:after {
  border-top-color: #198754;
}
</style>
