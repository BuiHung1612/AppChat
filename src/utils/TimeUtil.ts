import moment from "moment";
export const TIME_FORMATS = {
    APIDate: "YYYY-MM-DDTHH:mm:ssZ",
    Date: "DD/MM/YYYY",
    DateTime: "DD/MM/YYYY HH:mm"
};

export const convertToTimeAgo = (targetDate: number) => {
    const mDate = moment(targetDate);
    const diff = mDate.diff(Date.now(), 'hours');
    if (diff > 23) {
        return mDate.format(TIME_FORMATS.APIDate);
    }
    return mDate.fromNow();
}