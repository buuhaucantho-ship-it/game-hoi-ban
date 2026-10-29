import * as M from "../world/models";
import * as THREE from "three";
/** Everything the player can build. Footprint w×d in metres (before rotation). */
export type BuildCat = "farm" | "decor" | "struct" | "house";
export type BuildKind = "plot" | "sit" | "well" | "coop" | "shipbox" | "fish" | "sleep" | "wish" | "info" | null;
export interface BuildDef { id: string; name: string; cat: BuildCat; price: number; level: number; w: number; d: number;
  col: "box" | "circle" | "none" | "posts"; r?: number; box?: [number, number, number, number]; door?: [number, number]; kind: BuildKind; desc: string; max?: number; model: () => THREE.Object3D; }
export const CATS: { id: BuildCat; name: string }[] = [{ id: "farm", name: "Nông trại" }, { id: "decor", name: "Trang trí" }, { id: "struct", name: "Công trình" }, { id: "house", name: "Nhà ở" }];
export const BUILD: Record<string, BuildDef> = {};
const add = (d: BuildDef) => (BUILD[d.id] = d);
const off = (o: THREE.Object3D, z: number) => { const g = new THREE.Group(); o.position.z = z; g.add(o); return g; };
add({ id: "plot", name: "Luống đất", cat: "farm", price: 80, level: 1, w: 3, d: 2.6, col: "none", kind: "plot", desc: "Thêm một luống để trồng rau.", max: 30, model: () => M.plotBed() });
add({ id: "shipbox", name: "Thùng hàng", cat: "farm", price: 120, level: 1, w: 1.4, d: 1, col: "box", box: [-0.7, -0.5, 0.7, 0.5], door: [0, 1.1], kind: "shipbox", desc: "Bán nông sản ngay tại vườn.", model: () => M.shipBox() });
add({ id: "scarecrow", name: "Bù nhìn", cat: "farm", price: 90, level: 2, w: 1, d: 1, col: "circle", r: 0.3, kind: "info", desc: "Luống trong 6 m lớn nhanh hơn 25%.", model: () => M.scarecrow() });
add({ id: "coop", name: "Chuồng gà", cat: "farm", price: 300, level: 2, w: 4.4, d: 3.2, col: "box", box: [-2.1, -1.6, 2.1, 1.3], door: [0, 2], kind: "coop", desc: "Mỗi sáng có 2 trứng gà để lượm.", max: 4, model: () => M.coop() });
add({ id: "well", name: "Giếng nước", cat: "farm", price: 220, level: 3, w: 2.2, d: 2.2, col: "circle", r: 1, kind: "well", desc: "Tưới một lượt mọi luống trong 7 m.", model: () => M.well() });
add({ id: "path", name: "Gạch lát", cat: "decor", price: 10, level: 1, w: 2, d: 2, col: "none", kind: null, desc: "Lát lối đi cho đẹp.", model: () => M.pathTile() });
add({ id: "flowerpot", name: "Chậu hoa", cat: "decor", price: 15, level: 1, w: 0.8, d: 0.8, col: "circle", r: 0.3, kind: null, desc: "Chậu hoa hồng xinh.", model: () => M.flowerPot() });
add({ id: "bush", name: "Bụi cây", cat: "decor", price: 20, level: 1, w: 1.6, d: 1.2, col: "circle", r: 0.6, kind: null, desc: "Bụi cây màu nâu thu.", model: () => M.bush("tan") });
add({ id: "bushdots", name: "Bụi hoa vàng", cat: "decor", price: 25, level: 1, w: 1.2, d: 1.2, col: "circle", r: 0.5, kind: null, desc: "Bụi vàng điểm hạt đỏ.", model: () => M.bush("dots") });
add({ id: "feather", name: "Cây lá hồng", cat: "decor", price: 30, level: 2, w: 1, d: 1, col: "circle", r: 0.25, kind: null, desc: "Lá hồng phơn phớt như lông vũ.", model: () => M.featherPlant() });
add({ id: "lamp", name: "Đèn đường", cat: "decor", price: 60, level: 1, w: 0.8, d: 0.8, col: "circle", r: 0.25, kind: null, desc: "Tự sáng khi trời tối.", model: () => M.lamp() });
add({ id: "bench", name: "Ghế đỏ", cat: "decor", price: 50, level: 1, w: 2.4, d: 1, col: "box", box: [-1.15, -0.45, 1.15, 0.3], door: [0, 0.8], kind: "sit", desc: "Ngồi nghỉ ngắm vườn.", model: () => M.bench(2.2) });
add({ id: "tree_gold", name: "Cây lá vàng", cat: "decor", price: 70, level: 1, w: 2, d: 2, col: "circle", r: 0.45, kind: null, desc: "Tán vàng rực mùa thu.", model: () => M.autumnTree("gold", 0.9) });
add({ id: "tree_orange", name: "Cây lá cam", cat: "decor", price: 70, level: 2, w: 2, d: 2, col: "circle", r: 0.45, kind: null, desc: "Tán cam cao vút.", model: () => M.autumnTree("orange", 0.9) });
add({ id: "tree_tan", name: "Cây lá nâu", cat: "decor", price: 70, level: 2, w: 2.4, d: 2.4, col: "circle", r: 0.45, kind: null, desc: "Tán tròn hoa văn chữ thập.", model: () => M.autumnTree("tan", 0.9) });
add({ id: "fountain", name: "Đài phun nước", cat: "decor", price: 600, level: 4, w: 6, d: 6, col: "circle", r: 2.8, kind: "wish", desc: "Đài phun ba tầng. Ước một điều mỗi ngày!", max: 2, model: () => M.fountain(1) });
add({ id: "fence", name: "Hàng rào trắng", cat: "struct", price: 12, level: 1, w: 2, d: 0.4, col: "box", kind: null, desc: "Rào trắng dài 2 m.", model: () => M.fenceSeg() });
add({ id: "wall", name: "Tường đá", cat: "struct", price: 25, level: 1, w: 2, d: 0.7, col: "box", kind: null, desc: "Tường đá tím dài 2 m.", model: () => M.wallSeg() });
add({ id: "pond", name: "Ao cá nhỏ", cat: "struct", price: 260, level: 3, w: 3.4, d: 3.4, col: "circle", r: 1.5, kind: "fish", desc: "Thả câu ngay trong vườn.", model: () => M.smallPond() });
add({ id: "gazebo", name: "Chòi nghỉ", cat: "struct", price: 350, level: 3, w: 4.2, d: 4.2, col: "posts", kind: "sit", desc: "Chòi lá có ghế và bàn trà.", model: () => M.gazebo() });
add({ id: "cabin", name: "Nhà gỗ", cat: "house", price: 800, level: 3, w: 5, d: 5.4, col: "box", box: [-2.25, -2.3, 2.25, 1.45], door: [0, 2.2], kind: "sleep", desc: "Căn nhà gỗ ấm cúng, vô ngủ được.", max: 3, model: () => off(M.cabin(), -0.4) });
add({ id: "villa", name: "Nhà ngói", cat: "house", price: 1800, level: 5, w: 8, d: 8.6, col: "box", box: [-3.65, -3.65, 3.65, 1.6], door: [0, 2.6], kind: "sleep", desc: "Nhà ngói đỏ có hiên rộng.", max: 2, model: () => off(M.villa(), -1) });
/** Footprint after rotation (rot = quarter turns). */
export const footprint = (d: BuildDef, rot: number) => rot % 2 ? { w: d.d, d: d.w } : { w: d.w, d: d.d };
/** Land lots that can be bought. Rects are [x0, z0, x1, z1]. */
export interface LotDef { id: string; name: string; price: number; level: number; rect: [number, number, number, number]; sign: [number, number, number]; desc: string; }
export const LOTS: LotDef[] = [
  { id: "east", name: "Vườn Đông", price: 400, level: 2, rect: [26, -24, 46, 26], sign: [24.6, 0, -Math.PI / 2], desc: "Có con rạch nhỏ để câu cá." },
  { id: "west", name: "Vườn Tây", price: 800, level: 3, rect: [-46, -24, -26, 26], sign: [-24.6, 4, Math.PI / 2], desc: "Đất rộng, có bụi tre và ruộng nhỏ." },
  { id: "north", name: "Đồi Bắc", price: 1500, level: 4, rect: [-46, -46, 46, -24], sign: [-12, -22.6, 0], desc: "Khu đồi sau nhà, rộng nhất." }
];
export const HOME_RECT: [number, number, number, number] = [-26, -24, 26, 26];
