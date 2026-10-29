/** Crop definitions. Growth counts real seconds while the soil is wet; crops never die. */
export interface CropDef {
  id: string; name: string; seedItem: string; produceItem: string;
  seedPrice: number; sellPrice: number;
  stageSeconds: number[];      // seconds per growth stage before the ripe stage
  yield: [number, number];     // min,max produce per harvest
  regrow: number | null;       // stage to return to after harvest (null = plot empties)
  enabled: boolean;            // v0.1 ships two crops; the rest are data-ready
}
export const CROPS: Record<string, CropDef> = {
  raumuong: { id: "raumuong", name: "Rau muống", seedItem: "seed_raumuong", produceItem: "raumuong", seedPrice: 10, sellPrice: 15,
    stageSeconds: [35, 40, 45], yield: [2, 3], regrow: 1, enabled: true },
  caixanh: { id: "caixanh", name: "Cải xanh", seedItem: "seed_caixanh", produceItem: "caixanh", seedPrice: 15, sellPrice: 28,
    stageSeconds: [45, 55, 60], yield: [1, 2], regrow: null, enabled: true },
  cachua: { id: "cachua", name: "Cà chua", seedItem: "seed_cachua", produceItem: "cachua", seedPrice: 20, sellPrice: 12,
    stageSeconds: [60, 70, 80], yield: [3, 5], regrow: 2, enabled: false },
  bido: { id: "bido", name: "Bí đỏ", seedItem: "seed_bido", produceItem: "bido", seedPrice: 30, sellPrice: 70,
    stageSeconds: [80, 90, 100], yield: [1, 1], regrow: null, enabled: false },
  muoigio: { id: "muoigio", name: "Hoa mười giờ", seedItem: "seed_muoigio", produceItem: "muoigio", seedPrice: 12, sellPrice: 20,
    stageSeconds: [40, 40, 50], yield: [1, 2], regrow: 2, enabled: false },
  daubap: { id: "daubap", name: "Đậu bắp", seedItem: "seed_daubap", produceItem: "daubap", seedPrice: 18, sellPrice: 10,
    stageSeconds: [50, 60, 60], yield: [3, 4], regrow: 2, enabled: false }
};
export const RIPE = 3; // stage index that is harvestable
