<template>
  <TreeDecision :current-step="decisionSteps[0]" :steps="decisionSteps" />
</template>

<script lang="ts" setup>
import { decisionSteps } from "~/data/decisionData";
import { Step } from "~~/models/Step";

const steps = ref<Step[]>(decisionSteps);
</script>
