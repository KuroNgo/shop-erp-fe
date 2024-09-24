<template>
    <VaDateInput v-model="value" :readonly="false" :format-date="formatDate" :parse-date="parseDate" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const datePlusDay = (date: Date, days: number): Date => {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
};

const nextWeek = datePlusDay(new Date(), 7);

interface Props {
    formatDate: string;
    parseData: string;
}
const props = defineProps<Props>();
const value = ref<{ start: Date; end: Date }>({
    start: new Date(),
    end: nextWeek,
});

const formatDate = (date: Date): string => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const parseDate = (text: string): Date => {
    const [day, month, year] = text.split("/").map(Number);
    return new Date(year, month - 1, day);
};

const formattedDate = formatDate(value.value.start);
const parsedDate = parseDate("12/09/2024"); // ví dụ
</script>
