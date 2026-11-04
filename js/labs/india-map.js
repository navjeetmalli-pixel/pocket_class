// India map data (own drawing, simplified, offline; no map tiles and no downloaded map files).
//
// The map is built from shared border lines ("arcs"), so neighbours always touch exactly and a border is drawn once.
// Every point is [longitude, latitude]. A state is a ring (or several rings for islands) made of arcs; the arcs of a ring
// are chained automatically. An arc used by two states is a border between them; an arc used by one state is the coast
// or the external boundary. Arc names tell their kind: "coast-..." are the sea coast, and a country after "|" names the
// neighbour on the other side (an external arc). The external boundary is drawn as depicted by the Survey of India: the
// whole of Jammu and Kashmir and Ladakh is shown as part of India, as in Indian school atlases.
//
// Map not to scale; simplified for learning. A few dozen points per state; rivers, ranges and plateaus are
// hand-placed school-atlas lines, not survey data.
//
//   IndiaMap.STATES   [{ id, code, name, kind: "state" | "ut", capital, cap: [lon, lat], region, lp: [lon, lat], rivers, feats, tiny,
//                        nb: [ids], coast: ["Arabian Sea" | "Bay of Bengal"], borders: [countries], d, rings, color }]
//   IndiaMap.RIVERS / RANGES / PLATEAUS / DESERTS / REGIONS   physical layers (id, name, line or area, facts)
//   IndiaMap.W, IndiaMap.H, IndiaMap.proj(lon, lat) -> [x, y]
//   IndiaMap.calc   the pure functions the checks use (pointIn, bearing, distance, segment crossing)

const IndiaMap = (() => {
  // ---------- junction points ----------
  const NODES = `
SIRCREEK 68.15 23.95
LA1 74.3 36.85
LA2 74.9 37.05
GRP 71.0 24.45
RPP 74.05 29.98
PJP 75.3 32.4
PJH 75.75 32.52
JHL 76.9 33.1
JLX 73.0 35.3
HLC 78.7 32.6
HUT 78.75 31.35
UNC 81.03 30.22
UUN 80.15 28.9
HHU 77.6 30.45
HUU 77.55 30.25
PHH 76.82 30.84
CHB 76.8 30.64
PHR 74.65 29.65
HRU 77.35 27.75
DS 77.33 28.4
DN 77.24 28.88
RMU 78.1 26.5
GRM 74.2 23.5
GMM 74.1 21.7
CMU 83.15 24.05
CUJ 83.85 23.95
UBJ 83.6 24.5
BJW 87.85 25.2
BWN 88.05 26.43
BUN 84.05 27.4
WSN 88.0 27.12
NS 88.1 27.95
SWB 88.85 27.2
WBA 89.85 26.72
WAB 89.85 26.0
AMB1 89.85 25.7
AMB2 92.45 25.1
AT1 92.15 24.45
ATM 92.35 24.3
TMB 92.3 23.0
AMM 93.0 24.5
MMY 93.4 23.85
BMY 92.8 21.95
AMN 93.55 25.55
NMY 94.65 25.35
ANA 95.1 26.9
NAM 95.3 26.85
AAB 92.0 26.85
ABC 91.6 27.77
AMC 97.35 28.3
JOW 86.65 22.35
COJ 84.15 22.5
ACO 81.4 17.95
ATC 81.1 17.85
MTC 80.4 18.65
MMC 80.5 21.6
MTK 77.55 18.1
MGK 74.2 15.7
KTA 77.75 16.0
AKT 78.35 12.8
KTK 76.55 11.65
GMC 72.72 20.12
V1 73.3 20.42
V2 72.95 20.14
MGC 73.7 15.75
KGC 74.1 14.88
KKC 74.88 12.78
KTC 77.07 8.33
ATCO 80.2 13.55
AOC 84.75 19.25
OWC 87.5 21.58
BDC 88.95 21.63
DIUW 70.85 20.75
DIUE 71.05 20.76
DAMN 72.8 20.47
DAMS 72.82 20.3
KARS 79.83 10.85
KARN 79.85 11.0
PYS 79.78 11.78
PYN 79.85 12.05
YANW 82.2 16.66
YANE 82.32 16.72
MAHN 75.5 11.75
MAHS 75.52 11.65
`;

  // ---------- arcs ----------
  // name[|country]: node or lon,lat ...   (coast-* arcs are the sea coast; a country marks the external boundary)
  const ARCS = `
coast-guj-1|Arabian: SIRCREEK 68.3 23.85 68.52 23.72 68.7 23.35 68.9 23.1 69.2 22.95 69.5 22.83 69.85 22.82 70.2 22.97 70.45 22.95 70.3 22.65 70.05 22.45 69.55 22.4 69.1 22.45 69.0 22.25 69.35 21.9 69.65 21.62 70.0 21.38 70.37 20.92 DIUW
guj-diu: DIUW 70.95 20.78 DIUE
diu-sea|Arabian: DIUE 71.05 20.7 70.95 20.66 70.85 20.7 DIUW
coast-guj-2|Arabian: DIUE 71.4 20.93 71.75 21.02 72.0 21.3 72.2 21.6 72.28 21.82 72.4 22.1 72.5 22.3 72.62 22.1 72.65 21.8 72.6 21.5 72.62 21.2 72.7 20.9 DAMN
guj-daman: DAMN 72.92 20.43 72.93 20.35 DAMS
daman-sea|Arabian: DAMN 72.76 20.4 DAMS
coast-guj-3|Arabian: DAMS 72.78 20.2 GMC
gm-1: GMC 72.84 20.13 V2
dnh-guj: V2 72.95 20.3 73.1 20.42 V1
dnh-mh: V1 73.28 20.2 73.12 20.08 V2
gm-2: V1 73.45 20.7 73.7 21.0 73.9 21.3 GMM
coast-mh|Arabian: GMC 72.7 19.6 72.78 19.15 72.82 18.95 72.97 18.6 72.95 18.25 73.2 17.8 73.3 17.2 73.35 16.6 73.5 16.1 MGC
mh-goa: MGC 73.85 15.8 74.05 15.78 MGK
coast-goa|Arabian: MGC 73.78 15.45 73.85 15.2 74.0 14.98 KGC
goa-ka: MGK 74.32 15.4 74.28 15.1 74.18 14.95 KGC
coast-ka|Arabian: KGC 74.15 14.7 74.3 14.5 74.45 14.2 74.55 13.95 74.65 13.6 74.7 13.3 74.8 12.95 KKC
coast-kl-1|Arabian: KKC 74.98 12.5 75.2 12.1 75.4 11.8 MAHN
mahe-kl: MAHN 75.58 11.72 MAHS
mahe-sea|Arabian: MAHN 75.47 11.7 MAHS
coast-kl-2|Arabian: MAHS 75.7 11.4 75.8 11.2 75.95 10.9 76.15 10.4 76.25 9.95 76.35 9.5 76.55 8.9 76.95 8.5 KTC
coast-tn-1|Ocean: KTC 77.3 8.15 77.55 8.08 77.9 8.25 78.15 8.8 78.5 9.1 78.95 9.25 79.3 9.25 79.42 9.2 79.25 9.45 79.0 9.8 79.2 10.15 79.5 10.35 79.85 10.3 79.85 10.7 KARS
tn-karaikal: KARS 79.7 10.92 KARN
karaikal-sea|Bengal: KARS 79.92 10.92 KARN
coast-tn-2|Bengal: KARN 79.85 11.4 79.78 11.7 PYS
py-tn: PYS 79.68 11.9 79.75 12.05 PYN
py-sea|Bengal: PYS 79.9 11.9 PYN
coast-tn-3|Bengal: PYN 80.0 12.5 80.2 12.9 80.28 13.1 80.3 13.4 ATCO
coast-ap-1|Bengal: ATCO 80.1 14.0 80.05 14.5 80.1 15.0 80.15 15.5 80.5 15.8 80.95 15.75 81.15 16.0 81.3 16.3 81.7 16.35 82.0 16.55 YANW
ap-yanam: YANW 82.2 16.8 82.32 16.82 YANE
yanam-sea|Bengal: YANW 82.28 16.65 YANE
coast-ap-2|Bengal: YANE 82.4 17.0 82.8 17.4 83.3 17.7 83.7 18.0 84.1 18.3 84.4 18.7 84.7 19.05 AOC
coast-od|Bengal: AOC 85.1 19.45 85.4 19.7 85.85 19.8 86.2 19.95 86.6 20.3 86.9 20.75 87.05 21.1 87.3 21.45 OWC
coast-wb|Bengal: OWC 87.75 21.65 88.1 21.65 88.4 21.6 88.7 21.65 BDC

guj-pak|Pakistan: SIRCREEK 68.5 24.2 69.0 24.3 69.5 24.4 70.0 24.2 70.5 24.3 GRP
raj-pak|Pakistan: GRP 70.3 25.0 69.6 26.0 69.55 26.6 70.0 27.5 70.5 27.95 71.3 28.0 71.9 28.7 72.9 29.3 73.3 29.7 73.7 30.0 RPP
pb-pak|Pakistan: RPP 74.22 30.4 74.55 30.95 74.55 31.5 74.85 31.85 75.1 32.15 PJP
jk-pak|Pakistan: PJP 74.9 32.5 74.6 32.8 74.1 32.85 73.8 33.05 73.45 33.35 73.35 33.8 73.0 34.15 73.2 34.6 72.8 34.95 JLX
ladakh-pak|Pakistan: JLX 72.9 35.7 73.3 36.0 73.7 36.4 LA1
ladakh-afg|Afghanistan: LA1 74.6 37.0 LA2
ladakh-ext|China: LA2 75.8 37.05 76.3 36.8 76.9 36.4 77.3 35.9 77.8 35.5 78.5 35.6 79.4 35.5 80.3 35.4 80.3 34.9 80.0 34.2 79.6 33.4 79.3 32.75 HLC
hp-china|China: HLC 78.5 32.2 78.75 31.85 78.7 31.55 HUT
uk-china|China: UNC 80.5 30.5 80.2 30.65 79.9 30.9 79.5 31.05 79.1 31.15 78.85 31.25 HUT
uk-nepal|Nepal: UUN 80.2 29.2 80.38 29.65 80.6 29.9 80.85 30.15 UNC
up-nepal|Nepal: BUN 83.6 27.4 83.3 27.45 82.8 27.5 82.4 27.75 82.0 27.9 81.7 28.2 81.4 28.45 81.0 28.7 80.6 28.75 UUN
br-nepal|Nepal: BWN 87.6 26.4 87.0 26.45 86.5 26.55 86.0 26.65 85.5 26.8 85.2 26.75 84.9 27.0 84.6 27.25 84.3 27.4 BUN
wb-nepal|Nepal: BWN 88.0 26.7 88.15 26.95 WSN
sk-nepal|Nepal: WSN 88.05 27.55 NS
sk-china|China: NS 88.4 28.1 88.75 28.1 88.92 27.8 88.9 27.45 SWB
wb-bhutan|Bhutan: SWB 88.9 27.0 89.2 26.82 89.55 26.73 WBA
assam-bhutan|Bhutan: WBA 90.3 26.85 90.8 26.8 91.3 26.85 91.7 26.8 AAB
arun-bhutan|Bhutan: AAB 91.8 27.0 91.55 27.2 91.5 27.5 ABC
arun-china|China: ABC 91.9 27.85 92.5 28.2 93.0 28.6 93.6 28.65 94.2 29.1 94.8 29.35 95.4 29.05 95.9 29.3 96.4 29.1 96.6 28.7 96.85 28.45 97.15 28.4 AMC
arun-myan|Myanmar: AMC 97.2 27.9 96.9 27.65 96.6 27.3 96.3 27.2 95.9 27.0 95.55 26.95 NAM
nag-myan|Myanmar: NAM 95.25 26.5 95.0 26.15 94.8 25.75 NMY
man-myan|Myanmar: NMY 94.6 24.8 94.4 24.3 94.25 23.95 93.8 23.9 MMY
miz-myan|Myanmar: MMY 93.3 23.4 93.4 23.0 93.3 22.5 93.1 22.1 BMY
miz-ban|Bangladesh: BMY 92.5 22.2 92.3 22.6 TMB
tri-ban|Bangladesh: TMB 92.1 22.95 91.6 22.95 91.35 23.2 91.15 23.65 91.3 24.1 91.6 24.3 91.9 24.45 AT1
assam-ban-s|Bangladesh: AMB2 92.4 24.9 92.3 24.7 92.2 24.55 AT1
meg-ban|Bangladesh: AMB1 90.2 25.25 90.7 25.15 91.3 25.17 91.8 25.15 92.1 25.12 AMB2
assam-ban-w|Bangladesh: WAB 89.9 25.85 AMB1
wb-ban|Bangladesh: WAB 89.5 25.97 89.05 26.22 88.75 26.4 88.5 26.5 88.5 26.15 88.5 25.8 88.4 25.45 88.2 25.15 88.15 24.8 88.35 24.5 88.6 24.25 88.75 23.95 88.6 23.65 88.9 23.4 89.05 23.1 88.85 22.75 88.9 22.35 88.95 22.0 BDC

pb-jk: PJP 75.5 32.45 PJH
jk-hp: JHL 76.45 33.0 76.1 32.75 PJH
jk-lad: JLX 73.7 35.1 74.3 34.85 74.8 34.6 75.4 34.45 75.7 34.3 76.0 34.1 76.3 33.65 76.7 33.3 JHL
lad-hp: HLC 78.4 32.6 77.9 32.7 77.4 32.9 JHL
pb-hp: PJH 75.95 32.3 76.1 31.95 76.45 31.4 76.6 31.1 76.7 30.95 PHH
hp-uk: HUT 78.45 31.05 78.15 30.85 77.9 30.75 77.65 30.7 HHU
hp-har: HHU 77.35 30.55 77.1 30.7 76.95 30.8 PHH
pb-ch-w: PHH 76.7 30.76 CHB
har-ch-e: PHH 76.9 30.75 CHB
pb-har: CHB 76.6 30.45 76.3 30.2 75.8 29.9 75.35 29.8 75.0 29.6 PHR
pb-raj: PHR 74.35 29.8 RPP
raj-har: PHR 74.6 29.3 74.85 29.0 75.25 28.75 75.45 28.3 75.85 28.05 76.3 27.9 76.8 27.75 77.1 27.7 HRU
har-up-s: HRU 77.5 28.0 77.4 28.25 DS
delhi-up: DS 77.32 28.65 DN
delhi-har: DN 77.0 28.85 76.85 28.68 76.84 28.55 77.1 28.5 77.25 28.42 DS
har-up-n: DN 77.2 29.2 77.2 29.6 77.35 29.95 HUU
har-uk: HUU 77.58 30.35 HHU
uk-up: HUU 77.9 30.1 78.15 29.95 78.4 29.8 78.65 29.5 78.9 29.15 79.2 28.8 79.6 28.8 80.0 28.85 UUN
raj-up: RMU 77.85 26.8 77.6 27.1 77.45 27.4 HRU
raj-mp: RMU 77.7 26.2 77.5 25.8 77.15 25.3 76.9 24.9 76.6 24.5 76.35 24.2 75.9 24.15 75.55 24.2 75.3 24.7 75.0 24.85 74.75 24.4 74.6 23.95 GRM
guj-raj: GRP 71.4 24.65 72.0 24.7 72.9 24.45 73.0 24.1 73.45 23.9 73.85 23.65 GRM
guj-mp: GRM 74.15 23.2 74.4 22.85 74.2 22.45 74.0 22.1 GMM
mp-up: RMU 78.3 26.2 78.45 25.8 78.45 25.5 78.3 25.1 78.2 24.7 78.4 24.45 78.65 24.7 78.7 25.35 79.1 25.2 79.6 25.05 80.0 25.2 80.6 25.05 81.2 24.9 81.8 24.85 82.3 24.55 82.75 24.25 CMU
mp-mh: GMM 74.5 21.5 75.1 21.4 75.7 21.4 76.2 21.4 76.8 21.5 77.3 21.55 77.9 21.65 78.5 21.8 79.2 21.7 79.8 21.7 80.2 21.65 MMC
mp-cg: CMU 82.85 23.6 82.4 23.2 81.9 22.8 81.4 22.5 81.05 22.1 MMC
cg-up: CMU 83.5 24.1 CUJ
cg-jh: COJ 84.1 22.9 84.1 23.25 83.9 23.5 CUJ
jh-up: CUJ 83.7 24.3 UBJ
cg-mh: MMC 80.8 21.2 80.95 20.7 80.9 20.1 80.85 19.5 80.6 19.1 MTC
cg-tg: MTC 80.75 18.5 80.95 18.25 ATC
cg-ap: ATC 81.25 17.88 ACO
cg-od: ACO 81.55 18.5 81.8 19.0 82.0 19.5 82.3 19.9 82.4 20.3 82.3 20.8 82.5 21.2 83.0 21.4 83.4 21.65 83.8 21.75 84.0 22.0 COJ
od-ap: ACO 82.0 18.2 82.5 18.3 83.0 18.55 83.45 18.75 83.85 19.05 84.3 19.1 AOC
jh-od: JOW 86.2 22.1 85.8 22.3 85.4 22.45 85.0 22.5 84.55 22.35 COJ
od-wb: JOW 86.9 22.0 87.2 21.75 87.35 21.65 OWC
jh-wb: BJW 87.75 24.8 87.5 24.25 87.2 23.95 86.9 23.75 86.5 23.6 86.15 23.4 85.8 23.1 86.2 23.0 86.55 22.7 JOW
br-jh: UBJ 84.0 24.55 84.35 24.65 84.7 24.4 85.1 24.55 85.5 24.75 85.9 24.55 86.4 24.6 86.7 24.95 87.0 25.1 87.4 25.1 BJW
br-wb: BJW 87.9 25.5 87.95 25.85 88.0 26.15 BWN
up-br: UBJ 83.55 24.85 83.9 25.4 84.25 25.6 84.65 26.0 84.55 26.4 84.25 26.8 BUN
tg-ap: KTA 78.4 16.05 78.9 16.1 79.3 16.5 79.8 16.65 80.3 16.75 80.6 17.1 80.85 17.5 ATC
tg-mh: MTC 80.0 18.85 79.6 19.2 79.4 19.6 79.1 19.9 78.6 19.8 78.3 19.55 78.0 19.3 77.85 19.0 77.75 18.6 MTK
tg-ka: MTK 77.4 17.7 77.4 17.2 77.15 16.8 77.3 16.4 KTA
mh-ka: MTK 77.4 18.4 77.0 18.4 76.7 17.9 76.4 17.4 75.9 17.35 75.55 16.9 75.1 16.6 74.7 16.7 74.4 16.3 MGK
ap-ka: AKT 78.25 13.2 78.0 13.8 77.6 14.3 77.35 14.8 77.2 15.3 77.4 15.7 KTA
ap-tn: AKT 78.7 13.0 79.0 13.2 79.5 13.35 79.9 13.5 ATCO
ka-tn: AKT 77.95 12.7 77.85 12.2 77.6 11.9 77.2 11.95 76.9 11.75 76.6 11.8 KTK
ka-kl: KTK 76.3 11.7 76.0 11.85 75.85 12.2 75.65 12.4 75.3 12.45 75.1 12.7 KKC
kl-tn: KTK 76.75 11.3 76.85 10.8 77.1 10.3 77.1 9.9 77.25 9.5 77.2 9.0 77.1 8.65 KTC

wb-assam: WBA 89.8 26.4 WAB
wb-sikkim: SWB 88.55 27.0 88.25 27.05 WSN
meg-assam: AMB1 90.2 26.05 90.9 25.95 91.5 25.85 91.95 25.75 92.3 25.65 92.7 25.55 92.8 25.3 AMB2
assam-tri: AT1 92.3 24.4 ATM
assam-miz: ATM 92.55 24.3 92.75 24.5 AMM
assam-man: AMM 93.1 24.85 93.2 25.15 93.4 25.35 AMN
assam-nag: AMN 93.7 25.85 93.85 26.05 94.15 26.2 94.4 26.45 94.7 26.65 95.0 26.8 ANA
assam-arun: ANA 95.35 27.15 95.75 27.3 95.85 27.65 95.5 27.85 95.0 27.6 94.5 27.3 93.9 27.0 93.3 26.95 92.8 26.9 92.4 26.88 AAB
nag-arun: NAM 95.2 26.88 ANA
man-nag: AMN 93.85 25.6 94.2 25.45 94.5 25.4 NMY
man-miz: AMM 93.2 24.35 93.3 24.1 MMY
miz-tri: TMB 92.28 23.5 92.3 24.0 ATM

an1|Bengal: 92.95 13.55 93.05 13.2 92.98 12.6 92.95 12.0 92.9 11.6 92.7 11.5 92.6 11.9 92.7 12.6 92.75 13.2 92.85 13.5 92.95 13.55
an2|Bengal: 92.5 10.5 92.72 10.55 92.7 10.85 92.52 10.8 92.5 10.5
an3|Bengal: 92.72 9.1 92.84 9.15 92.8 9.3 92.7 9.25 92.72 9.1
an4|Bengal: 93.4 7.9 93.62 8.05 93.6 8.25 93.42 8.15 93.4 7.9
an5|Bengal: 93.72 7.2 93.9 7.15 93.95 6.85 93.82 6.75 93.7 6.95 93.72 7.2
lk1|Arabian: 72.5 10.57 72.63 10.7 72.76 10.57 72.63 10.44 72.5 10.57
lk2|Arabian: 72.05 10.85 72.18 10.98 72.31 10.85 72.18 10.72 72.05 10.85
lk3|Arabian: 72.6 11.12 72.73 11.25 72.86 11.12 72.73 10.99 72.6 11.12
lk4|Arabian: 73.55 10.82 73.68 10.95 73.81 10.82 73.68 10.69 73.55 10.82
lk5|Arabian: 73.52 10.08 73.65 10.21 73.78 10.08 73.65 9.95 73.52 10.08
lk6|Arabian: 72.87 8.28 73.0 8.41 73.13 8.28 73.0 8.15 72.87 8.28
`;

  // ---------- states and union territories ----------
  // id, code, name, kind, capital, [capital lon, lat], region, [label lon, lat], rings (arcs; | between separate pieces)
  const ST = [
    ["andhrapradesh", "AP", "Andhra Pradesh", "state", "Amaravati", [80.52, 16.51], "South India", [79.2, 15.2], "coast-ap-1 ap-yanam coast-ap-2 od-ap cg-ap tg-ap ap-ka ap-tn"],
    ["arunachalpradesh", "AR", "Arunachal Pradesh", "state", "Itanagar", [93.62, 27.08], "North-East India", [94.4, 28.1], "nag-arun assam-arun arun-bhutan arun-china arun-myan"],
    ["assam", "AS", "Assam", "state", "Dispur", [91.79, 26.14], "North-East India", [92.7, 26.3], "wb-assam assam-bhutan assam-arun assam-nag assam-man assam-miz assam-tri assam-ban-s meg-assam assam-ban-w"],
    ["bihar", "BR", "Bihar", "state", "Patna", [85.14, 25.6], "East India", [85.6, 25.7], "br-jh br-wb br-nepal up-br"],
    ["chhattisgarh", "CG", "Chhattisgarh", "state", "Raipur", [81.63, 21.25], "Central India", [82.0, 21.6], "cg-ap cg-od cg-jh cg-up mp-cg cg-mh cg-tg"],
    ["goa", "GA", "Goa", "state", "Panaji", [73.83, 15.5], "West India", [74.05, 15.4], "mh-goa coast-goa goa-ka"],
    ["gujarat", "GJ", "Gujarat", "state", "Gandhinagar", [72.65, 23.22], "West India", [72.2, 23.2], "coast-guj-1 guj-diu coast-guj-2 guj-daman coast-guj-3 gm-1 dnh-guj gm-2 guj-mp guj-raj guj-pak"],
    ["haryana", "HR", "Haryana", "state", "Chandigarh", [76.78, 30.73], "North India", [76.2, 29.2], "har-ch-e pb-har raj-har har-up-s delhi-har har-up-n har-uk hp-har"],
    ["himachalpradesh", "HP", "Himachal Pradesh", "state", "Shimla", [77.17, 31.1], "North India", [77.2, 31.8], "jk-hp lad-hp hp-china hp-uk hp-har pb-hp"],
    ["jharkhand", "JH", "Jharkhand", "state", "Ranchi", [85.33, 23.34], "East India", [85.4, 23.6], "cg-jh jh-up br-jh jh-wb jh-od"],
    ["karnataka", "KA", "Karnataka", "state", "Bengaluru", [77.59, 12.97], "South India", [76.0, 14.5], "goa-ka coast-ka ka-kl ka-tn ap-ka tg-ka mh-ka"],
    ["kerala", "KL", "Kerala", "state", "Thiruvananthapuram", [76.94, 8.52], "South India", [76.7, 10.2], "coast-kl-1 mahe-kl coast-kl-2 kl-tn ka-kl"],
    ["madhyapradesh", "MP", "Madhya Pradesh", "state", "Bhopal", [77.41, 23.26], "Central India", [78.0, 23.8], "raj-mp mp-up mp-cg mp-mh guj-mp"],
    ["maharashtra", "MH", "Maharashtra", "state", "Mumbai", [72.88, 19.08], "West India", [76.0, 19.5], "gm-2 dnh-mh gm-1 coast-mh mh-goa mh-ka tg-mh cg-mh mp-mh"],
    ["manipur", "MN", "Manipur", "state", "Imphal", [93.94, 24.82], "North-East India", [93.9, 24.8], "assam-man man-nag man-myan man-miz"],
    ["meghalaya", "ML", "Meghalaya", "state", "Shillong", [91.88, 25.57], "North-East India", [91.3, 25.55], "meg-assam meg-ban"],
    ["mizoram", "MZ", "Mizoram", "state", "Aizawl", [92.72, 23.73], "North-East India", [92.85, 23.3], "assam-miz man-miz miz-myan miz-ban miz-tri"],
    ["nagaland", "NL", "Nagaland", "state", "Kohima", [94.11, 25.67], "North-East India", [94.4, 25.9], "assam-nag man-nag nag-myan nag-arun"],
    ["odisha", "OD", "Odisha", "state", "Bhubaneswar", [85.82, 20.3], "East India", [84.3, 20.7], "coast-od od-wb jh-od cg-od od-ap"],
    ["punjab", "PB", "Punjab", "state", "Chandigarh", [76.78, 30.73], "North India", [75.4, 30.9], "pb-pak pb-jk pb-hp pb-ch-w pb-har pb-raj"],
    ["rajasthan", "RJ", "Rajasthan", "state", "Jaipur", [75.79, 26.91], "North India", [73.8, 26.6], "raj-pak pb-raj raj-har raj-up raj-mp guj-raj"],
    ["sikkim", "SK", "Sikkim", "state", "Gangtok", [88.61, 27.33], "North-East India", [88.5, 27.55], "wb-sikkim sk-nepal sk-china"],
    ["tamilnadu", "TN", "Tamil Nadu", "state", "Chennai", [80.27, 13.08], "South India", [78.4, 10.9], "kl-tn ka-tn ap-tn coast-tn-3 py-tn coast-tn-2 tn-karaikal coast-tn-1"],
    ["telangana", "TS", "Telangana", "state", "Hyderabad", [78.49, 17.39], "South India", [79.0, 17.9], "tg-ap cg-tg tg-mh tg-ka"],
    ["tripura", "TR", "Tripura", "state", "Agartala", [91.28, 23.83], "North-East India", [91.75, 23.75], "assam-tri miz-tri tri-ban"],
    ["uttarpradesh", "UP", "Uttar Pradesh", "state", "Lucknow", [80.95, 26.85], "Central India", [80.8, 27.0], "up-nepal uk-up har-up-n delhi-up har-up-s raj-up mp-up cg-up jh-up up-br"],
    ["uttarakhand", "UK", "Uttarakhand", "state", "Dehradun", [78.03, 30.32], "Central India", [79.1, 29.9], "uk-nepal uk-china hp-uk har-uk uk-up"],
    ["westbengal", "WB", "West Bengal", "state", "Kolkata", [88.36, 22.57], "East India", [87.6, 23.2], "coast-wb wb-ban wb-assam wb-bhutan wb-sikkim wb-nepal br-wb jh-wb od-wb"],
    ["andaman", "AN", "Andaman and Nicobar Islands", "ut", "Sri Vijaya Puram", [92.74, 11.62], "Islands", [91.3, 12.0], "an1 | an2 | an3 | an4 | an5"],
    ["chandigarh", "CH", "Chandigarh", "ut", "Chandigarh", [76.78, 30.73], "North India", [76.2, 31.35], "pb-ch-w har-ch-e"],
    ["dnhdd", "DH", "Dadra and Nagar Haveli and Daman and Diu", "ut", "Daman", [72.83, 20.41], "West India", [71.6, 20.1], "dnh-guj dnh-mh | guj-daman daman-sea | guj-diu diu-sea"],
    ["delhi", "DL", "Delhi", "ut", "New Delhi", [77.21, 28.61], "North India", [76.2, 28.55], "delhi-up delhi-har"],
    ["jammukashmir", "JK", "Jammu and Kashmir", "ut", "Srinagar (summer) and Jammu (winter)", [74.8, 34.08], "North India", [74.6, 33.6], "pb-jk jk-hp jk-lad jk-pak"],
    ["ladakh", "LA", "Ladakh", "ut", "Leh", [77.58, 34.15], "North India", [77.6, 34.9], "ladakh-pak ladakh-afg ladakh-ext lad-hp jk-lad"],
    ["lakshadweep", "LD", "Lakshadweep", "ut", "Kavaratti", [72.64, 10.57], "Islands", [71.0, 10.0], "lk1 | lk2 | lk3 | lk4 | lk5 | lk6"],
    ["puducherry", "PY", "Puducherry", "ut", "Puducherry", [79.83, 11.93], "South India", [80.75, 11.5], "py-tn py-sea | tn-karaikal karaikal-sea | ap-yanam yanam-sea | mahe-kl mahe-sea"],
  ];
  // Rivers that flow through the state and physical features it has (checked against the drawing by scripts/check-labs.js).
  const FACTS = {
    andhrapradesh: [["godavari", "krishna"], ["eghats"]],
    arunachalpradesh: [["brahmaputra"], ["himalaya"]],
    assam: [["brahmaputra"], []],
    bihar: [["ganga"], []],
    chhattisgarh: [["mahanadi"], []],
    goa: [[], ["wghats"]],
    gujarat: [["narmada", "tapi"], []],
    haryana: [["yamuna"], ["aravalli"]],
    himachalpradesh: [["sutlej", "beas", "ravi"], ["himalaya"]],
    jharkhand: [[], ["chotanagpur"]],
    karnataka: [["krishna", "kaveri"], ["wghats", "deccan"]],
    kerala: [[], ["wghats"]],
    madhyapradesh: [["narmada", "tapi"], ["vindhya", "satpura"]],
    maharashtra: [["godavari", "krishna", "tapi"], ["wghats", "satpura", "deccan"]],
    manipur: [[], []],
    meghalaya: [[], []],
    mizoram: [[], []],
    nagaland: [[], []],
    odisha: [["mahanadi"], ["eghats"]],
    punjab: [["sutlej", "beas", "ravi"], []],
    rajasthan: [[], ["aravalli", "thar"]],
    sikkim: [[], ["himalaya"]],
    tamilnadu: [["kaveri"], ["eghats", "wghats"]],
    telangana: [["godavari", "krishna"], ["deccan"]],
    tripura: [[], []],
    uttarpradesh: [["ganga", "yamuna"], []],
    uttarakhand: [["ganga", "yamuna"], ["himalaya"]],
    westbengal: [["ganga"], []],
    andaman: [[], []],
    chandigarh: [[], []],
    dnhdd: [[], []],
    delhi: [["yamuna"], []],
    jammukashmir: [["jhelum", "chenab"], ["himalaya"]],
    ladakh: [["indus"], ["himalaya"]],
    lakshadweep: [[], []],
    puducherry: [[], []],
  };
  const TINY = new Set(["chandigarh", "delhi", "dnhdd", "puducherry", "lakshadweep", "andaman"]);
  // Tiny places get a ring marker so they can be tapped.
  const MARK = { chandigarh: [76.78, 30.74], delhi: [77.1, 28.62], dnhdd: [73.05, 20.27], puducherry: [79.8, 11.92] };

  // ---------- rivers, ranges, plateaus ----------
  // flows: where the water goes. "west" = into the Arabian Sea, "east" = into the Bay of Bengal, "joins" = joins another river.
  const RIV = [
    ["ganga", "Ganga", "east", "Bay of Bengal", "78.9,30.99 78.6,30.15 78.17,29.95 78.15,29.4 78.38,28.2 79.9,27.05 80.35,26.45 81.85,25.43 83.0,25.3 83.57,25.58 83.98,25.57 85.14,25.6 86.47,25.37 87.0,25.25 87.85,25.05 87.9,24.8 88.1,24.1 88.35,23.2 88.35,22.55 88.1,21.7", "88.3,24.4 89.0,24.0 90.0,23.6 90.6,23.0 90.9,22.5"],
    ["yamuna", "Yamuna", "joins", "the Ganga at Prayagraj", "78.45,31.0 77.9,30.8 77.55,30.4 77.3,30.1 77.2,29.4 77.25,28.65 77.7,27.5 78.02,27.18 79.02,26.78 79.75,26.12 81.85,25.43", ""],
    ["brahmaputra", "Brahmaputra", "east", "Bay of Bengal", "95.1,29.15 94.95,28.9 95.33,28.07 95.65,27.83 94.9,27.5 94.2,26.9 92.8,26.63 91.75,26.18 90.62,26.17 89.98,26.0 89.7,25.8", "89.7,25.8 89.7,25.0 90.5,23.5 90.8,22.8"],
    ["indus", "Indus", "west", "Arabian Sea", "79.45,32.7 78.4,33.5 77.55,34.15 76.8,34.5 76.2,34.7 75.5,35.0 75.0,35.4 74.6,35.6 74.0,35.4 73.3,34.8 72.7,34.2", "72.7,34.2 72.25,33.9 71.55,32.96 70.5,28.9 68.85,27.7 68.4,25.4 67.4,24.0"],
    ["sutlej", "Sutlej", "joins", "the Indus system in Pakistan", "78.75,31.8 78.4,31.55 77.65,31.45 76.43,31.4 76.55,30.97 75.85,30.9 74.97,31.15 74.55,30.95 74.25,30.4", "74.25,30.4 73.0,29.6 71.5,29.3 70.5,28.95"],
    ["narmada", "Narmada", "west", "Arabian Sea", "81.75,22.68 79.95,23.15 77.72,22.75 77.1,22.35 76.15,22.25 74.9,22.05 73.75,21.83 73.0,21.7 72.62,21.65", ""],
    ["tapi", "Tapi", "west", "Arabian Sea", "78.25,21.8 77.6,21.4 76.95,21.15 76.23,21.3 75.78,21.05 74.25,21.4 73.6,21.17 72.83,21.17 72.65,21.0", ""],
    ["godavari", "Godavari", "east", "Bay of Bengal", "73.78,20.0 75.4,19.5 77.3,19.15 77.95,18.88 79.45,18.88 79.98,18.83 80.88,17.67 81.78,17.0 82.25,16.65", ""],
    ["krishna", "Krishna", "east", "Bay of Bengal", "73.65,17.92 74.55,16.85 75.88,16.33 77.35,16.2 78.87,16.08 79.31,16.57 80.62,16.5 81.0,15.78", ""],
    ["kaveri", "Kaveri", "east", "Bay of Bengal", "75.5,12.38 75.95,12.45 76.57,12.42 77.18,12.3 77.78,12.1 77.8,11.8 77.7,11.35 78.7,10.82 79.3,10.95 79.85,11.15", ""],
    ["mahanadi", "Mahanadi", "east", "Bay of Bengal", "81.9,20.2 82.15,20.9 82.58,21.7 83.85,21.55 83.9,20.83 85.0,20.7 85.88,20.47 86.7,20.3", ""],
    ["beas", "Beas", "joins", "the Sutlej at Harike", "77.1,32.35 77.2,32.25 77.1,31.95 76.95,31.7 76.0,31.95 75.6,31.95 75.28,31.52 74.97,31.15", ""],
    ["ravi", "Ravi", "joins", "the Chenab in Pakistan", "76.8,32.3 76.15,32.55 75.68,32.37 75.03,32.04 74.7,31.85", ""],
    ["chenab", "Chenab", "joins", "the Indus system in Pakistan", "77.0,32.55 76.4,32.9 75.77,33.3 75.3,33.1 74.74,32.9 74.3,32.5", ""],
    ["jhelum", "Jhelum", "joins", "the Chenab in Pakistan", "75.25,33.53 74.8,34.08 74.35,34.2 73.47,34.37 73.3,33.7 73.65,33.15", ""],
  ];
  const RNG = [
    ["himalaya", "Himalaya", "74.6,35.3 75.5,34.4 76.6,33.6 77.5,32.7 78.2,31.9 78.9,31.2 79.6,30.9 80.6,30.35 81.0,30.2 | 88.1,27.85 88.8,27.9 89.5,27.7 90.8,27.8 91.6,27.9 92.5,28.2 93.5,28.6 94.5,29.0 95.2,29.1"],
    ["wghats", "Western Ghats", "73.7,21.2 73.6,20.5 73.5,19.5 73.5,18.5 73.6,17.6 73.9,16.5 74.1,15.5 74.4,14.5 75.2,13.0 75.7,12.2 76.3,11.4 76.9,10.5 77.0,9.5 77.3,8.6 77.5,8.2"],
    ["eghats", "Eastern Ghats", "85.2,20.6 84.5,19.3 83.0,18.3 82.0,17.6 80.9,17.0 79.7,15.8 79.2,14.6 79.0,13.6 78.7,12.6 78.2,11.8 77.7,11.4"],
    ["aravalli", "Aravalli", "77.1,28.5 76.4,27.6 75.7,27.0 74.6,26.3 73.9,25.5 73.4,24.9 72.8,24.6 72.5,24.3"],
    ["vindhya", "Vindhya Range", "74.5,22.7 75.8,22.65 77.4,23.2 78.7,23.7 80.0,24.2 82.5,24.6 83.8,24.8"],
    ["satpura", "Satpura Range", "73.7,21.8 74.2,21.6 74.6,21.4 75.4,21.35 76.2,21.35 76.8,21.45 77.3,21.8 77.8,22.2 78.5,22.45 79.5,22.4 80.5,22.4 81.7,22.7"],
  ];
  const PLT = [
    ["deccan", "Deccan Plateau", "74.0,21.0 75.5,21.3 77.5,21.5 79.5,21.2 80.2,20.0 80.6,18.8 80.0,17.0 79.2,15.5 78.8,14.0 78.5,12.6 77.8,11.6 77.0,10.9 76.5,11.2 75.8,12.3 75.0,13.5 74.6,14.8 74.1,16.2 73.8,17.5 73.6,19.0 73.6,20.4"],
    ["chotanagpur", "Chota Nagpur Plateau", "83.6,23.8 84.5,24.4 85.5,24.5 86.4,24.5 87.1,24.1 87.0,23.3 86.5,22.7 86.0,22.2 85.2,22.2 84.5,22.4 83.9,22.8"],
  ];
  const DES = [["thar", "Thar Desert", "70.0,24.8 69.6,26.0 69.6,27.0 70.4,27.9 71.5,28.5 72.8,29.2 73.8,29.8 74.3,29.3 74.8,28.5 75.3,27.8 75.3,26.9 74.9,26.0 74.4,25.3 73.9,24.9 72.9,24.7 71.7,24.5"]];
  // The six physical divisions of India. They are drawn behind the state outlines and clipped to India.
  const REG = [
    ["mountains", "Northern Mountains", "72.0,38.5 99.0,38.5 99.0,28.0 97.4,27.3 96.0,27.2 95.2,27.2 94.0,27.2 93.0,27.1 92.0,26.9 91.0,26.8 90.0,26.8 89.2,26.75 88.3,26.7 88.0,26.6 87.0,27.0 85.0,27.4 83.5,27.6 82.0,28.2 80.4,29.0 79.5,29.2 78.5,29.6 77.8,30.0 77.0,30.6 76.4,31.4 75.5,32.1 74.4,32.2 72.0,34.0 | 92.8,24.0 96.0,24.0 96.0,26.9 95.0,26.9 94.0,26.1 93.4,25.4 92.8,25.0"],
    ["plains", "Northern Plains", "74.4,32.2 75.5,32.1 76.4,31.4 77.0,30.6 77.8,30.0 78.5,29.6 79.5,29.2 80.4,29.0 82.0,28.2 83.5,27.6 85.0,27.4 87.0,27.0 88.0,26.6 88.3,26.7 89.2,26.75 90.0,26.8 91.0,26.8 92.0,26.9 93.0,27.1 94.0,27.2 95.2,27.2 95.0,26.7 93.5,26.2 92.0,25.9 90.5,25.9 90.0,25.2 89.2,24.8 88.4,24.3 87.9,24.6 87.2,24.9 86.0,24.6 85.0,24.6 84.0,24.6 83.0,24.9 82.0,25.1 81.0,25.2 80.0,25.5 79.0,26.2 78.0,26.7 77.3,27.5 76.5,28.0 75.5,28.6 74.7,29.3 73.8,29.9 73.9,30.6"],
    ["plateau", "Peninsular Plateau", "72.5,24.5 73.3,25.6 74.2,26.2 75.3,27.0 76.6,27.8 77.4,27.6 78.0,26.8 79.0,25.9 80.0,25.4 81.0,25.1 82.0,24.9 83.0,24.8 84.0,24.6 85.0,24.6 86.0,24.9 87.0,25.2 87.8,24.9 87.6,24.0 87.0,22.8 86.5,22.0 85.4,20.6 84.5,19.3 83.0,18.2 82.0,17.5 80.8,16.5 79.6,15.3 79.2,14.2 78.9,13.0 78.4,11.8 77.6,10.8 76.8,9.5 77.0,8.5 76.0,9.6 75.5,12.0 74.4,14.5 73.9,16.5 73.4,18.5 73.5,20.5 73.0,22.0 72.6,23.2"],
    ["desert", "Indian Desert", "70.0,24.8 69.6,26.0 69.6,27.0 70.4,27.9 71.5,28.5 72.8,29.2 73.8,29.8 74.3,29.3 74.8,28.5 75.3,27.8 75.3,26.9 74.9,26.0 74.4,25.3 73.9,24.9 72.9,24.7 71.7,24.5"],
    ["coastal", "Coastal Plains", "72.6,21.5 72.9,22.2 73.0,21.0 73.0,20.3 73.2,19.0 73.3,18.0 73.5,16.5 74.0,15.4 74.5,14.0 75.1,12.8 75.7,11.7 76.3,10.5 76.8,9.5 77.2,8.6 77.45,8.2 77.0,7.5 74.0,10.0 72.0,18.0 72.0,21.5 | 87.4,22.4 86.7,21.8 86.1,21.0 85.4,20.3 84.8,19.6 83.6,18.5 82.8,17.7 81.9,17.1 81.2,16.4 80.5,15.5 79.8,14.4 79.6,13.3 79.3,12.0 78.9,10.6 78.3,9.4 77.9,8.4 78.5,7.5 82.0,10.0 85.0,16.0 88.5,21.0 89.2,22.2"],
  ];

  // ---------- projection ----------
  const LON0 = 66.5, LAT0 = 38.0, SX = 18.6, SY = 20;
  const W = Math.round((99 - LON0) * SX), H = Math.round((LAT0 - 5.5) * SY);
  const r1 = (v) => Math.round(v * 10) / 10;
  const proj = (lon, lat) => [r1((lon - LON0) * SX), r1((LAT0 - lat) * SY)];

  // ---------- parse ----------
  const NODE = {};
  NODES.trim().split("\n").forEach((l) => {
    const [n, x, y] = l.trim().split(/\s+/);
    NODE[n] = [Number(x), Number(y)];
  });
  const ARC = {};
  ARCS.trim().split("\n").forEach((l) => {
    l = l.trim();
    if (!l) return;
    const m = l.match(/^([\w-]+)(?:\|(\w+))?:\s*(.*)$/);
    const pts = [];
    const toks = m[3].split(/\s+/);
    for (let i = 0; i < toks.length; i++) {
      if (NODE[toks[i]]) pts.push(NODE[toks[i]].slice());
      else {
        pts.push([Number(toks[i]), Number(toks[i + 1])]);
        i++;
      }
    }
    ARC[m[1]] = { name: m[1], pts, tag: m[2] || "" };
  });
  const same = (a, b) => Math.abs(a[0] - b[0]) < 1e-9 && Math.abs(a[1] - b[1]) < 1e-9;

  // Chain the arcs of one ring into a closed list of points; returns { pts, problem }.
  function chain(names) {
    const left = names.slice();
    const first = ARC[left.shift()];
    let pts = first.pts.slice();
    let guard = 0;
    while (left.length && guard++ < 200) {
      const end = pts[pts.length - 1];
      let k = left.findIndex((n) => same(ARC[n].pts[0], end));
      let rev = false;
      if (k < 0) {
        k = left.findIndex((n) => same(ARC[n].pts[ARC[n].pts.length - 1], end));
        rev = k >= 0;
      }
      if (k < 0) return { pts, problem: `no arc continues at ${end} (left: ${left.join(", ")})` };
      const a = ARC[left.splice(k, 1)[0]].pts.slice();
      if (rev) a.reverse();
      pts = pts.concat(a.slice(1));
    }
    if (!same(pts[0], pts[pts.length - 1])) return { pts, problem: "ring does not close" };
    return { pts, problem: "" };
  }

  const STATES = ST.map(([id, code, name, kind, capital, cap, region, lp, rings]) => {
    const groups = rings.split("|").map((g) => g.trim().split(/\s+/));
    const built = groups.map(chain);
    const facts = FACTS[id] || [[], []];
    return {
      id, code, name, kind, capital, cap, region, lp,
      arcs: groups.flat(),
      problems: built.map((b) => b.problem).filter(Boolean),
      rings: built.map((b) => b.pts),
      rivers: facts[0],
      feats: facts[1],
      tiny: TINY.has(id),
      mark: MARK[id] || null,
    };
  });
  const byId = {};
  STATES.forEach((s) => (byId[s.id] = s));

  const SEAS = { Arabian: "Arabian Sea", Bengal: "Bay of Bengal", Ocean: "Indian Ocean" };
  // Neighbours = states that share a border arc (both list it, and it is not the coast or an external line).
  const users = {};
  STATES.forEach((s) => s.arcs.forEach((a) => (users[a] = (users[a] || []).concat(s.id))));
  STATES.forEach((s) => {
    s.nb = [];
    s.coast = [];
    s.borders = [];
    s.arcs.forEach((a) => {
      const u = users[a];
      if (u.length === 2) {
        const o = u.find((x) => x !== s.id) || s.id;
        if (o !== s.id && !s.nb.includes(o)) s.nb.push(o);
      } else if (SEAS[ARC[a].tag]) {
        if (!s.coast.includes(SEAS[ARC[a].tag])) s.coast.push(SEAS[ARC[a].tag]);
      } else if (ARC[a].tag && !s.borders.includes(ARC[a].tag)) s.borders.push(ARC[a].tag);
    });
    s.nb.sort((a, b) => STATES.findIndex((x) => x.id === a) - STATES.findIndex((x) => x.id === b));
  });

  // Colours: greedy colouring so that neighbours never share a colour (6 colours).
  const order = STATES.slice().sort((a, b) => b.nb.length - a.nb.length);
  order.forEach((s) => {
    const used = new Set(s.nb.map((n) => byId[n].color).filter((c) => c != null));
    let c = 0;
    while (used.has(c)) c++;
    s.color = c;
  });

  // ---------- paths ----------
  const pathOf = (pts) => "M" + pts.map((p) => proj(p[0], p[1]).join(" ")).join("L") + "Z";
  const lineOf = (pts) => "M" + pts.map((p) => proj(p[0], p[1]).join(" ")).join("L");
  STATES.forEach((s) => (s.d = s.rings.map(pathOf).join("")));
  const pts = (str) => str.trim().split(/\s+/).map((p) => p.split(",").map(Number));
  const lines = (str) => str.split("|").map((x) => x.trim()).filter(Boolean).map(pts);

  const RIVERS = RIV.map(([id, name, flows, into, path, cont]) => ({ id, name, flows, into, pts: pts(path), cont: cont ? pts(cont) : null, d: lineOf(pts(path)), dc: cont ? lineOf(pts(cont)) : "" }));
  const RANGES = RNG.map(([id, name, path]) => ({ id, name, parts: lines(path), d: lines(path).map(lineOf).join("") }));
  const PLATEAUS = PLT.map(([id, name, path]) => ({ id, name, pts: pts(path), d: pathOf(pts(path)) }));
  const DESERTS = DES.map(([id, name, path]) => ({ id, name, pts: pts(path), d: pathOf(pts(path)) }));
  const REGIONS = REG.map(([id, name, path]) => ({ id, name, parts: lines(path), d: lines(path).map(pathOf).join("") }));

  // The land outside India (neighbouring countries): the external boundary chain from Sir Creek round to the Bangladesh coast, then
  // the coast of Bangladesh and Myanmar, the frame, and back along the coast of Pakistan.
  const EXT = Object.values(ARC).filter((a) => a.tag && !SEAS[a.tag]).map((a) => a.name);
  const outside = (() => {
    // Chain open: start at Sir Creek and follow arcs until Bangladesh coast point.
    let cur = NODE.SIRCREEK.slice();
    const left = EXT.slice();
    const out = [cur];
    let guard = 0;
    while (left.length && guard++ < 100) {
      let k = left.findIndex((n) => same(ARC[n].pts[0], cur));
      let rev = false;
      if (k < 0) {
        k = left.findIndex((n) => same(ARC[n].pts[ARC[n].pts.length - 1], cur));
        rev = true;
      }
      if (k < 0) break;
      const a = ARC[left.splice(k, 1)[0]].pts.slice();
      if (rev) a.reverse();
      a.slice(1).forEach((p) => out.push(p));
      cur = a[a.length - 1];
    }
    return { pts: out, end: cur, unused: left };
  })();
  const OUTSIDE_PTS = outside.pts.concat([
    [89.3, 21.75], [89.7, 21.85], [90.2, 21.95], [90.7, 22.05], [91.1, 22.35], [91.6, 22.4], [91.85, 22.3], [91.95, 21.5], [92.3, 20.85], [92.9, 20.15], [93.5, 19.2], [94.3, 18.5], [94.5, 17.0], [94.3, 16.0], [95.1, 15.8], [96.0, 16.6], [97.0, 16.9], [97.6, 16.3], [98.4, 14.5], [99.0, 13.0],
    [99.0, 38.5], [66.5, 38.5], [66.5, 25.4], [67.1, 24.8], [67.45, 24.15],
  ]);
  const NEIGHBOURS_D = pathOf(OUTSIDE_PTS);
  const SRILANKA = [[79.85, 9.8], [80.2, 9.8], [80.45, 9.5], [80.6, 9.0], [81.2, 8.5], [81.65, 7.8], [81.85, 7.0], [81.6, 6.4], [81.2, 6.1], [80.6, 5.95], [80.1, 6.1], [79.85, 6.9], [79.8, 7.8], [79.7, 8.5], [79.85, 9.1]];
  const SRILANKA_D = pathOf(SRILANKA);
  // The whole of India as one outline (state outlines) is used as a clip path; the external boundary is drawn from the external arcs.
  const BOUNDARY_D = Object.values(ARC).filter((a) => a.tag && !SEAS[a.tag]).map((a) => lineOf(a.pts)).join("");
  const LABELS = [
    // [text, lon, lat, class]
    ["Arabian Sea", 69.4, 15.5, "sea"], ["Bay of Bengal", 86.5, 14.5, "sea"], ["Indian Ocean", 77.5, 6.4, "sea"],
    ["Pakistan", 68.0, 28.6, "land"], ["Afghanistan", 68.4, 35.6, "land"], ["China", 84.0, 34.0, "land"], ["Nepal", 83.7, 28.6, "land"],
    ["Bhutan", 90.2, 27.45, "land"], ["Bangladesh", 89.6, 24.3, "land"], ["Myanmar", 96.7, 22.5, "land"], ["Sri Lanka", 80.8, 7.7, "land"],
  ];

  // ---------- pure helpers (used by the lab and the checks) ----------
  // Point in a ring (ray casting) in lon/lat.
  function inRing(p, ring) {
    let c = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i], [xj, yj] = ring[j];
      if (yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi) c = !c;
    }
    return c;
  }
  const inState = (p, s) => s.rings.some((r) => inRing(p, r));
  // Compass bearing in degrees (0 = north) between two places, with longitude scaled by cos(latitude).
  function bearing(a, b) {
    const lat = ((a[1] + b[1]) / 2) * (Math.PI / 180);
    const dx = (b[0] - a[0]) * Math.cos(lat);
    const dy = b[1] - a[1];
    return (Math.round((Math.atan2(dx, dy) * 180) / Math.PI) + 360) % 360;
  }
  const COMPASS = ["North", "North-east", "East", "South-east", "South", "South-west", "West", "North-west"];
  const compass = (deg) => COMPASS[Math.round(deg / 45) % 8];
  // Straight-line distance in km (haversine).
  function distance(a, b) {
    const R = 6371, rad = Math.PI / 180;
    const dl = (b[1] - a[1]) * rad, dg = (b[0] - a[0]) * rad;
    const h = Math.sin(dl / 2) ** 2 + Math.cos(a[1] * rad) * Math.cos(b[1] * rad) * Math.sin(dg / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  // Do segments p1p2 and p3p4 cross (properly, not at a shared end)?
  function cross(p1, p2, p3, p4) {
    const d = (a, b, c) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    const d1 = d(p3, p4, p1), d2 = d(p3, p4, p2), d3 = d(p1, p2, p3), d4 = d(p1, p2, p4);
    return ((d1 > 1e-12 && d2 < -1e-12) || (d1 < -1e-12 && d2 > 1e-12)) && ((d3 > 1e-12 && d4 < -1e-12) || (d3 < -1e-12 && d4 > 1e-12));
  }
  const bbox = (s) => {
    const all = s.rings.flat();
    return [Math.min(...all.map((p) => p[0])), Math.min(...all.map((p) => p[1])), Math.max(...all.map((p) => p[0])), Math.max(...all.map((p) => p[1]))];
  };
  const kmPerUnit = (SY ? 111.2 / SY : 5.5); // km per SVG unit going north-south

  return {
    W, H, LON0, LAT0, SX, SY, proj, STATES, byId, ARC, NODE, users, RIVERS, RANGES, PLATEAUS, DESERTS, REGIONS, LABELS, EXT,
    NEIGHBOURS_D, SRILANKA_D, BOUNDARY_D, OUTSIDE: outside, kmPerUnit,
    calc: { inRing, inState, bearing, compass, distance, cross, chain, bbox, COMPASS },
  };
})();
