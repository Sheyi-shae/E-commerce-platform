export default function formatDate  (originalDate) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dd = originalDate.getDate();
    const monthIndex = originalDate.getMonth();
    const yyyy = originalDate.getFullYear();
    const suffix = (dd === 1 || dd === 21 || dd === 31) ? 'st' : (dd === 2 || dd === 22) ? 'nd' : (dd === 3 || dd === 23) ? 'rd' : 'th';
    return `${dd}${suffix} ${months[monthIndex]} ${yyyy}`;
  };