import { GameState, hourOf } from "../core/State";
/** Ngoại's lines in Southern dialect. Picked by time of day and what she remembers. */
const pick = (a: string[]) => a[Math.floor(Math.random() * a.length)];
export function greetLine(s: GameState): string {
  const h = hourOf(s.time), f = s.flags;
  if (!f.talk) return "Trời ơi, cháu ngoại của ngoại về rồi nè! Đi đường xa có mệt hông con? Vô đây ngoại coi coi, ốm nhom hà.";
  if (f.harvest && !f.talkHarvest) { f.talkHarvest = s.time; return "Hồi sáng ngoại thấy con cắt rau rồi đó nghen. Rau tự tay trồng ăn ngọt lắm, bữa nay ngoại xào tỏi cho con ăn."; }
  if (f.plant && !f.talkPlant) { f.talkPlant = s.time; return "Con gieo hạt rồi hả? Nhớ tưới nước cho đất ẩm, cây mới chịu lớn. Đừng lo, cây của con hổng có héo đâu, ngoại coi chừng cho."; }
  if (h < 9) return pick(["Dậy sớm dữ ta! Sáng sớm tưới rau là mát nhứt đó con.", "Ngoại quét sân xong là đi chợ. Con muốn ăn gì hông?", "Nghe tiếng gà gáy chưa? Ở quê sáng nào cũng vậy đó con."]);
  if (h < 13) return pick(["Trưa nắng gắt, con vô hiên ngồi cho mát, đội nón vô nghen.", "Ngoại đang nấu canh chua cá lóc nè, chút nữa ăn cơm.", "Hồi nhỏ má con cũng hay trốn ngủ trưa ra ao sen chơi đó."]);
  if (h < 18) return pick(["Chiều mát rồi, ra vườn coi rau có lớn chưa con.", "Con thấy quê buồn hông? Ở lâu rồi con sẽ thương lắm cho coi.", "Cây xoài đó ông ngoại con trồng hồi má con mới sinh ra."]);
  if (h < 21) return pick(["Cháu ơi! Vô ăn cơm, để nguội hết bây giờ!", "Tối rồi, đom đóm bay ngoài ao sen kìa, đẹp lắm.", "Ăn cơm xong ngoại kể chuyện hồi xưa cho nghe nghen."]);
  return pick(["Khuya rồi, đi ngủ sớm mai còn dậy tưới rau con.", "Nghe tiếng dế kêu hông? Ngủ ngon nghen cháu."]);
}
export const giftLine = (item: string) => pick([`Ui, ${item} con trồng hả? Ngoại cảm ơn cháu nghen, để ngoại nấu canh.`, `Cháu ngoại giỏi quá! ${item} tươi rói luôn nè.`, `Thiệt hả con? Ngoại vui lắm đó. Để dành nấu cho con ăn.`]);
export const seedLine = () => "Hết hạt giống rồi hả? Ngoại còn mấy gói trong nhà kho nè, con cầm đi gieo tiếp nghen.";
export const STORIES = [
  "Hồi xưa nhà mình nghèo lắm, ông ngoại con chèo xuồng đi bán trái cây ngoài chợ nổi, sáng nào cũng đi từ lúc gà gáy.",
  "Cái lu nước đầu hè đó là của bà cố để lại. Nước mưa hứng trong lu uống ngọt lắm con.",
  "Ao sen này hồi trước là ao cá. Má con hồi nhỏ hay ra đây hái gương sen, té xuống ao hoài.",
  "Ngoại hay để dành mấy hột giống ngon nhứt mỗi mùa. Mai mốt ngoại chỉ con cách giữ giống nghen."
];
export const questAsk = (qty: number, name: string, reward: number) => pick([`Bữa nay ngoại cần ${qty} ${name} để nấu cơm. Con kiếm giúp ngoại nghen, ngoại gửi ${reward} xu mua bánh.`, `Con ơi, nhà mình hết ${name} rồi. Con đem cho ngoại ${qty} cái nghen, ngoại cho ${reward} xu.`, `Mai có khách, ngoại cần ${qty} ${name}. Con giúp ngoại hông? Ngoại thưởng ${reward} xu đó.`]);
export const questThanks = () => pick(["Trời ơi cháu ngoại giỏi quá! Đây, ngoại gửi tiền nè, cất kỹ nghen.", "Có cháu về ngoại đỡ cực biết bao nhiêu. Thương con quá!", "Đủ rồi đủ rồi! Để ngoại đi nấu liền. Tiền này con mua kẹo nghen."]);
export const questDoneLine = () => "Hôm nay con giúp ngoại đủ rồi. Mai ngoại nhờ tiếp nghen!";
export const rainLine = () => pick(["Trời mưa rồi, khỏi tưới rau nghen con. Mưa xuống là cây lớn vù vù.", "Mưa giông chiều nè, con vô hiên đứng cho khỏi ướt."]);
export const WISHES = ["Con ước ngoại luôn mạnh khoẻ!", "Ước vườn rau năm nay trúng mùa!", "Ước cả nhà được sum vầy Tết này.", "Ước mai trời đẹp để ra đồng chơi.", "Ước con câu được cá chép vàng!"];
export const sleepLine = (h: number) => h < 17 ? "Còn sớm mà con, chiều tối hẵng ngủ nghen." : pick(["Ngủ ngon nghen cháu. Mai dậy sớm tưới rau.", "Tắt đèn ngủ thôi con, khuya rồi."]);
