<script setup lang="ts" generic="M extends boolean = false">
import type { DateValue } from '@internationalized/date';
import { useForwardListeners, useOmitProps } from '../../composables';
import { compareYearMonth, toDate } from '../../date';
import Icon from '../_icon/icon.vue';
import CalendarRoot from './calendar-root.vue';
import CalendarCell from './calendar-cell.vue';
import CalendarCellTrigger from './calendar-cell-trigger.vue';
import CalendarGrid from './calendar-grid.vue';
import CalendarGridBody from './calendar-grid-body.vue';
import CalendarGridHead from './calendar-grid-head.vue';
import CalendarGridRow from './calendar-grid-row.vue';
import CalendarHeadCell from './calendar-head-cell.vue';
import CalendarHeader from './calendar-header.vue';
import CalendarHeading from './calendar-heading.vue';
import CalendarNext from './calendar-next.vue';
import CalendarPrev from './calendar-prev.vue';
import type { Formatter } from '../../date';
import type { CalendarCompactEmits, CalendarCompactProps, CalendarCompactSlots } from './types';

defineOptions({
  name: 'CalendarCompact'
});

const props = defineProps<CalendarCompactProps<M>>();

const emit = defineEmits<CalendarCompactEmits<M>>();

defineSlots<CalendarCompactSlots<M>>();

const forwardedProps = useOmitProps(props, [
  'headerProps',
  'headingProps',
  'prevProps',
  'nextProps',
  'gridProps',
  'gridHeadProps',
  'gridBodyProps',
  'gridRowProps',
  'headCellProps',
  'cellProps',
  'cellTriggerProps'
]);

const listeners = useForwardListeners(emit);

function normalizeMonthBoundary(date?: DateValue) {
  return date?.set({ day: 1 });
}

function clampPlaceholder(date: DateValue, minValue?: DateValue, maxValue?: DateValue) {
  const nextDate = date.set({ day: 1 });
  const normalizedMinValue = normalizeMonthBoundary(minValue);
  const normalizedMaxValue = normalizeMonthBoundary(maxValue);

  if (normalizedMinValue && compareYearMonth(nextDate, normalizedMinValue) < 0) {
    return normalizedMinValue.copy();
  }

  if (normalizedMaxValue && compareYearMonth(nextDate, normalizedMaxValue) > 0) {
    return normalizedMaxValue.copy();
  }

  return nextDate.copy();
}

function updatePlaceholder(
  date: DateValue,
  onPlaceholderChange: (date: DateValue) => void,
  minValue?: DateValue,
  maxValue?: DateValue
) {
  onPlaceholderChange(clampPlaceholder(date, minValue, maxValue));
}

function isMonthDisabled(date: DateValue, disabled: boolean, minValue?: DateValue, maxValue?: DateValue) {
  if (disabled) {
    return true;
  }

  const normalizedMinValue = normalizeMonthBoundary(minValue);
  const normalizedMaxValue = normalizeMonthBoundary(maxValue);

  if (normalizedMinValue && compareYearMonth(date, normalizedMinValue) < 0) {
    return true;
  }

  if (normalizedMaxValue && compareYearMonth(date, normalizedMaxValue) > 0) {
    return true;
  }

  return false;
}

function getHeadingValue(formatter: Formatter, placeholder: DateValue) {
  return formatter.fullMonthAndYear(toDate(placeholder));
}

function getMonthValue(formatter: Formatter, placeholder: DateValue) {
  return formatter.fullMonth(toDate(placeholder));
}

function getYearValue(formatter: Formatter, placeholder: DateValue) {
  return formatter.fullYear(toDate(placeholder));
}

function getMonthOptions(
  formatter: Formatter,
  placeholder: DateValue,
  disabled: boolean,
  minValue?: DateValue,
  maxValue?: DateValue
) {
  return formatter.getMonths().map(item => ({
    disabled: isMonthDisabled(placeholder.set({ day: 1, month: item.value }), disabled, minValue, maxValue),
    label: item.label,
    value: item.value
  }));
}

function getYearOptions(placeholder: DateValue, minValue?: DateValue, maxValue?: DateValue) {
  const startYear = normalizeMonthBoundary(minValue)?.year ?? placeholder.year - 100;
  const endYear = normalizeMonthBoundary(maxValue)?.year ?? placeholder.year + 100;

  return Array.from({ length: endYear - startYear + 1 }, (_, index) => {
    const year = startYear + index;

    return {
      label: String(year),
      value: year
    };
  });
}

function onMonthChange(
  value: number | undefined,
  placeholder: DateValue,
  disabled: boolean,
  onPlaceholderChange: (date: DateValue) => void,
  minValue?: DateValue,
  maxValue?: DateValue
) {
  if (value === undefined) {
    return;
  }

  const nextDate = placeholder.set({ day: 1, month: value });

  if (isMonthDisabled(nextDate, disabled, minValue, maxValue)) {
    return;
  }

  updatePlaceholder(nextDate, onPlaceholderChange, minValue, maxValue);
}

function onYearChange(
  value: number | undefined,
  placeholder: DateValue,
  onPlaceholderChange: (date: DateValue) => void,
  minValue?: DateValue,
  maxValue?: DateValue
) {
  if (value === undefined) {
    return;
  }

  updatePlaceholder(placeholder.set({ day: 1, year: value }), onPlaceholderChange, minValue, maxValue);
}
</script>

<template>
  <CalendarRoot v-bind="forwardedProps" v-on="listeners">
    <template #default="slotProps">
      <CalendarHeader v-bind="headerProps">
        <CalendarPrev v-bind="prevProps">
          <template #default="compactSlotProps">
            <slot name="prev" :disabled="compactSlotProps.disabled">
              <Icon icon="lucide:chevron-left" />
            </slot>
          </template>
        </CalendarPrev>
        <CalendarHeading v-bind="headingProps">
          <template #default>
            <slot
              name="heading"
              :heading-value="getHeadingValue(slotProps.formatter, slotProps.placeholder)"
              :month-options="
                getMonthOptions(
                  slotProps.formatter,
                  slotProps.placeholder,
                  slotProps.disabled,
                  slotProps.minValue,
                  slotProps.maxValue
                )
              "
              :month-value="getMonthValue(slotProps.formatter, slotProps.placeholder)"
              :on-month-change="
                (value: number | undefined) =>
                  onMonthChange(
                    value,
                    slotProps.placeholder,
                    slotProps.disabled,
                    slotProps.onPlaceholderChange,
                    slotProps.minValue,
                    slotProps.maxValue
                  )
              "
              :on-year-change="
                (value: number | undefined) =>
                  onYearChange(
                    value,
                    slotProps.placeholder,
                    slotProps.onPlaceholderChange,
                    slotProps.minValue,
                    slotProps.maxValue
                  )
              "
              :selected-month="slotProps.placeholder.month"
              :selected-year="slotProps.placeholder.year"
              :year-options="getYearOptions(slotProps.placeholder, slotProps.minValue, slotProps.maxValue)"
              :year-value="getYearValue(slotProps.formatter, slotProps.placeholder)"
            >
              {{ getHeadingValue(slotProps.formatter, slotProps.placeholder) }}
            </slot>
          </template>
        </CalendarHeading>
        <CalendarNext v-bind="nextProps">
          <template #default="compactSlotProps">
            <slot name="next" :disabled="compactSlotProps.disabled">
              <Icon icon="lucide:chevron-right" />
            </slot>
          </template>
        </CalendarNext>
      </CalendarHeader>

      <CalendarGrid v-for="month in slotProps.grid" :key="month.value.toString()" v-bind="gridProps">
        <CalendarGridHead v-bind="gridHeadProps">
          <CalendarGridRow v-bind="gridRowProps">
            <CalendarHeadCell
              v-for="(weekDay, index) in slotProps.weekDays"
              :key="`${month.value.toString()}-${weekDay}-${index}`"
              v-bind="headCellProps"
            >
              <slot name="head-cell" :date="month.value" :index="index" :label="weekDay">
                {{ weekDay }}
              </slot>
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody v-bind="gridBodyProps">
          <CalendarGridRow
            v-for="(week, weekIndex) in month.rows"
            :key="`${month.value.toString()}-${weekIndex}`"
            v-bind="gridRowProps"
          >
            <CalendarCell v-for="dateValue in week" :key="dateValue.toString()" :date="dateValue" v-bind="cellProps">
              <CalendarCellTrigger :day="dateValue" :month="month.value" v-bind="cellTriggerProps">
                <template #default="compactSlotProps">
                  <slot
                    name="day"
                    :day="dateValue"
                    :day-value="compactSlotProps.dayValue"
                    :disabled="compactSlotProps.disabled"
                    :month="month.value"
                    :outside-view="compactSlotProps.outsideView"
                    :outside-visible-view="compactSlotProps.outsideVisibleView"
                    :selected="compactSlotProps.selected"
                    :today="compactSlotProps.today"
                    :unavailable="compactSlotProps.unavailable"
                  >
                    {{ compactSlotProps.dayValue }}
                  </slot>
                </template>
              </CalendarCellTrigger>
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>

      <slot :model-value="slotProps.modelValue" />
    </template>
  </CalendarRoot>
</template>
