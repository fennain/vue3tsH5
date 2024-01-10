import dayjs from "dayjs";

export function useDayJs() {
  const formatDate = (
    date: string | number | Date | dayjs.Dayjs | null | undefined
  ) => {
    return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
  };
  const formatDateSet = (
    date: string | number | Date | dayjs.Dayjs | null | undefined,
    format: string
  ) => {
    return dayjs(date).format(format);
  };
  /**
   * 时间戳（秒）
   * @param date
   * @returns
   */
  const formatTimestamp = (date: number) => {
    return dayjs.unix(date).format("YYYY-MM-DD HH:mm:ss");
  };

  return { formatDate, formatDateSet, formatTimestamp };
}
