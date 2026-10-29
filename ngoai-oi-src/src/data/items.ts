export type ItemKind = "tool" | "seed" | "produce" | "gift";
export interface ItemDef { id: string; name: string; kind: ItemKind; buy: number | null; sell: number | null; stack: number; desc: string; crop?: string; }
export const ITEMS: Record<string, ItemDef> = {
  hand: { id: "hand", name: "Tay không", kind: "tool", buy: null, sell: null, stack: 1, desc: "Thu hoạch, trò chuyện, tương tác." },
  hoe: { id: "hoe", name: "Cuốc", kind: "tool", buy: null, sell: null, stack: 1, desc: "Xới đất trước khi gieo hạt." },
  can: { id: "can", name: "Bình tưới", kind: "tool", buy: null, sell: null, stack: 1, desc: "Tưới cho đất ẩm để cây lớn." },
  seed_raumuong: { id: "seed_raumuong", name: "Hạt rau muống", kind: "seed", buy: 10, sell: 4, stack: 99, desc: "Lớn nhanh, cắt xong mọc lại.", crop: "raumuong" },
  seed_caixanh: { id: "seed_caixanh", name: "Hạt cải xanh", kind: "seed", buy: 15, sell: 6, stack: 99, desc: "Cải xanh lá to, bán được giá.", crop: "caixanh" },
  raumuong: { id: "raumuong", name: "Bó rau muống", kind: "produce", buy: null, sell: 15, stack: 99, desc: "Rau muống xanh giòn, xào tỏi là hết sảy." },
  caixanh: { id: "caixanh", name: "Cải xanh", kind: "produce", buy: null, sell: 28, stack: 99, desc: "Nấu canh cải với tôm khô." }
};
