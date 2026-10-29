export type ItemKind = "tool" | "seed" | "produce" | "gift";
export interface ItemDef { id: string; name: string; kind: ItemKind; buy: number | null; sell: number | null; stack: number; desc: string; crop?: string; level?: number; }
export const ITEMS: Record<string, ItemDef> = {
  hand: { id: "hand", name: "Tay không", kind: "tool", buy: null, sell: null, stack: 1, desc: "Thu hoạch, trò chuyện, tương tác." },
  hoe: { id: "hoe", name: "Cuốc", kind: "tool", buy: null, sell: null, stack: 1, desc: "Xới đất trước khi gieo hạt." },
  can: { id: "can", name: "Bình tưới", kind: "tool", buy: null, sell: null, stack: 1, desc: "Tưới cho đất ẩm để cây lớn." },
  rod: { id: "rod", name: "Cần câu", kind: "tool", buy: 60, sell: null, stack: 1, desc: "Câu cá ở ao sen, rạch và ao nhỏ.", level: 1 },
  seed_raumuong: { id: "seed_raumuong", name: "Hạt rau muống", kind: "seed", buy: 10, sell: 4, stack: 99, desc: "Lớn nhanh, cắt xong mọc lại.", crop: "raumuong" },
  seed_caixanh: { id: "seed_caixanh", name: "Hạt cải xanh", kind: "seed", buy: 15, sell: 6, stack: 99, desc: "Cải xanh lá to, bán được giá.", crop: "caixanh" },
  seed_cachua: { id: "seed_cachua", name: "Hạt cà chua", kind: "seed", buy: 20, sell: 8, stack: 99, desc: "Ra nhiều trái, hái xong ra tiếp.", crop: "cachua" },
  seed_daubap: { id: "seed_daubap", name: "Hạt đậu bắp", kind: "seed", buy: 18, sell: 7, stack: 99, desc: "Cây cao, trái dài, hái hoài.", crop: "daubap" },
  seed_muoigio: { id: "seed_muoigio", name: "Hạt hoa mười giờ", kind: "seed", buy: 12, sell: 5, stack: 99, desc: "Hoa nở rực mỗi sáng.", crop: "muoigio" },
  seed_bido: { id: "seed_bido", name: "Hạt bí đỏ", kind: "seed", buy: 30, sell: 12, stack: 99, desc: "Lâu lớn nhưng trái to, bán đắt.", crop: "bido" },
  raumuong: { id: "raumuong", name: "Bó rau muống", kind: "produce", buy: null, sell: 15, stack: 99, desc: "Rau muống xanh giòn, xào tỏi là hết sảy." },
  caixanh: { id: "caixanh", name: "Cải xanh", kind: "produce", buy: null, sell: 28, stack: 99, desc: "Nấu canh cải với tôm khô." },
  cachua: { id: "cachua", name: "Cà chua", kind: "produce", buy: null, sell: 12, stack: 99, desc: "Đỏ mọng, nấu canh chua ngon." },
  daubap: { id: "daubap", name: "Đậu bắp", kind: "produce", buy: null, sell: 10, stack: 99, desc: "Luộc chấm chao là nhứt." },
  muoigio: { id: "muoigio", name: "Bó hoa mười giờ", kind: "produce", buy: null, sell: 20, stack: 99, desc: "Cắm bình cho ngoại vui." },
  bido: { id: "bido", name: "Trái bí đỏ", kind: "produce", buy: null, sell: 75, stack: 99, desc: "Nấu chè hay hầm xương đều ngon." },
  egg: { id: "egg", name: "Trứng gà", kind: "produce", buy: null, sell: 20, stack: 99, desc: "Trứng gà ta còn ấm." },
  caro: { id: "caro", name: "Cá rô", kind: "produce", buy: null, sell: 25, stack: 99, desc: "Cá rô đồng kho tộ." },
  caloc: { id: "caloc", name: "Cá lóc", kind: "produce", buy: null, sell: 45, stack: 99, desc: "Nướng trui cuốn bánh tráng." },
  cavang: { id: "cavang", name: "Cá chép vàng", kind: "produce", buy: null, sell: 120, stack: 99, desc: "Hiếm lắm, đem may mắn." }
};
