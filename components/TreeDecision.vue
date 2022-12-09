<script lang="ts" setup>
import { Step } from "~/models/Step";
import { PropType } from "vue";

const props = defineProps({
  currentStep: {
    type: Object as PropType<Step>,
    required: true,
    default: () => ({}),
  },
  steps: { type: Array as PropType<Step[]>, required: true, default: () => [] },
});
</script>
<template>
  <table class="tree">
    <tr>
      <td
        :colspan="
          Array.isArray(currentStep.answers)
            ? currentStep.answers.length * 2
            : 1
        "
      >
        <div class="question">{{ currentStep.question }}</div>
      </td>
    </tr>
    <tr v-if="Array.isArray(currentStep.answers) && currentStep.answers.length">
      <td
        v-for="(answer, index) in currentStep.answers"
        :key="index"
        class="answer"
      >
        <div class="node">{{ answer.label }}</div>
        <TreeDecision
          v-if="answer.next"
          :current-step="steps[answer.next]"
          :steps="steps"
        />
        <template v-else>
          <ul v-if="answer.solutions.length">
            <li
              v-for="(solution, index) in answer.solutions"
              :key="`solution-${index}`"
              class="solution"
            >
              {{ solution }}
            </li>
          </ul>
          <div v-else>NONE</div>
        </template>
      </td>
    </tr>
  </table>
</template>
<style lang="scss">
table.tree {
  padding-top: 30px;
  width: 100%;
  border-collapse: separate !important;
  border-spacing: 0 !important;
  .question {
    padding-bottom: 20px;
    font-weight: 700;
  }
  td {
    position: relative;
    vertical-align: top;
    text-align: center;
    padding-bottom: 20px;
  }
  .node {
    text-align: center;
    position: relative;
    display: inline-block;
  }
  .question::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 100%;
    height: 20px;
    border-left: 2px solid black;
    transform: translate3d(-1px, 0, 0);
  }
  .answer::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -20px;
    border-top: 2px solid black;
  }
  .answer::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 100%;
    height: 20px;
    border-left: 2px solid black;
  }
  .answer:first-child:before,
  .answer:last-child:before {
    display: none;
  }

  .answer::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -20px;
    border-top: 2px solid black;
  }
  .answer:first-child:after {
    left: 50%;
    height: 20px;
    border: 2px solid;
    border-color: black transparent transparent black;
  }
  .answer:last-child:after {
    right: 50%;
    height: 15px;
    border: 2px solid;
    border-color: black black transparent transparent;
  }
  .answer:first-child.answer:last-child::after {
    left: auto;
    border-radius: 0;
    border-color: transparent black transparent transparent;
  }
}
</style>
