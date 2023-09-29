/**
 * 3000000 => 3 000 000
 */

export default function formatNumber(num) {
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
