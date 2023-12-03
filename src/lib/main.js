import { algorithm1 } from "./functions";

const file1 = `
izolacja	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	PVC	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE	XLPE
rodzaj żyły (metal)	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Al.	Cu	Cu	Cu	Cu	Cu	Cu	Cu	Cu
temp otoczenia (powietrza)	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30	30					30	30	30			30	30	30	30	30	30	30	30					30	30	30			30	30	30	30	30	30	30	30					30	30	30			30	30	30	30	30	30	30	30
temp. gruntu																									20	20	20	20				20	20									20	20	20	20				20	20									20	20	20	20				20	20								
rezystywność gruntu																									1	1	1	1				1	1									1	1	1	1				1	1									1	1	1	1				1	1								
głębokość ułożenia																									0.7	0.7	0.7	0.7				0.7	0.7									0.7	0.7	0.7	0.7				0.7	0.7									0.7	0.7	0.7	0.7				0.7	0.7								
temp. żyły 	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	70	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90	90
przewód/kabel	YDY 450/750 V	YDY 450/750 V	YDY 450/750 V	YDY 450/750 V	YDY 450/750 V	YDY 450/750 V	YDY 450/750 V	YDY 450/750 V	YDYp 450/750 V	YDYp 450/750 V	YDYp 450/750 V	YDYp 450/750 V	YDYp 450/750 V	YDYp 450/750 V	YDYp 450/750 V	YDYp 450/750 V	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKY 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	YAKXS 0,6/1kV	N2XH 0,6/1kV	N2XH 0,6/1kV	N2XH 0,6/1kV	N2XH 0,6/1kV	N2XH 0,6/1kV	N2XH 0,6/1kV	N2XH 0,6/1kV	N2XH 0,6/1kV
obwód	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy	 1 fazowy	3 fazowy
liczba żył 	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	1	1	1	1	1	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	1	1	1	1	1	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5	1	1	1	1	1	3	4 lub 5	3	4 lub 5	3	4 lub 5	3	4 lub 5
liczba żył obciążonych prądowo	2	3	2	3	2	3	2	3	2	3	2	3	2	3	2	3	2	3	2	3	2	3	2	3	2	3	2	3	3	3	3	3	3	2	3	2	3	2	3	2	3	2	3	2	3	3	3	3	3	3	2	3	2	3	2	3	2	3	2	3	2	3	3	3	3	3	3	2	3	2	3	2	3	2	3
sposób instalacji 	przewód wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	przewód wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	przewód wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	przewód wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	przewód wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	przewód wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	przewód wielożyłowy w powietrzu (korytko perforowane, siatkowe)	przewód wielożyłowy w powietrzu (korytko perforowane, siatkowe)	przewód wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	przewód wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	przewód wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	przewód wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	przewód wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	przewód wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	przewód wielożyłowy w powietrzu (korytko perforowane, siatkowe)	przewód wielożyłowy w powietrzu (korytko perforowane, siatkowe)	kabel wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	kabel wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	kabel wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	kabel wielożyłowy w powietrzu (korytko perforowane, siatkowe)	kabel wielożyłowy w powietrzu (korytko perforowane, siatkowe)	kabel wielożyłowy bezpośrednio w gruncie	kabel wielożyłowy bezpośrednio w gruncie	kabel wielożyłowy w rurze osłonowej w gruncie	kabel wielożyłowy w rurze osłonowej w gruncie	układ 3 kabli jednożyłowych w rurze instalacyjnej w izolowanej cieplnie ścianie	układ 3 kabli jednożyłowych w rurze istalacyjnej/ listwie naściennej na ścianie murowanej lub drewnianej	Układ 3 kabli jednożyłowych (układ trójkąt) w powietrzu korytko perforowane/siatkowe	Układ 3 kabli jednożyłowych (układ trójkąt) bezpośrednio w gruncie	Układ 3 kabli jednożyłowych (układ trójkat) w rurze osłonowej w gruncie	kabel wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	kabel wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	kabel wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	kabel wielożyłowy w powietrzu (korytko perforowane, siatkowe)	kabel wielożyłowy w powietrzu (korytko perforowane, siatkowe)	kabel wielożyłowy bezpośrednio w gruncie	kabel wielożyłowy bezpośrednio w gruncie	kabel wielożyłowy w rurze osłonowej w gruncie	kabel wielożyłowy w rurze osłonowej w gruncie	układ 3 kabli jednożyłowych w rurze instalacyjnej w izolowanej cieplnie ścianie	układ 3 kabli jednożyłowych w rurze istalacyjnej/ listwie naściennej na ścianie murowanej lub drewnianej	Układ 3 kabli jednożyłowych (układ trójkąt) w powietrzu korytko perforowane/siatkowe	Układ 3 kabli jednożyłowych (układ trójkąt) bezpośrednio w gruncie	Układ 3 kabli jednożyłowych (układ trójkat) w rurze osłonowej w gruncie	kabel wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	kabel wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	kabel wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	kabel wielożyłowy w powietrzu (korytko perforowane, siatkowe)	kabel wielożyłowy w powietrzu (korytko perforowane, siatkowe)	kabel wielożyłowy bezpośrednio w gruncie	kabel wielożyłowy bezpośrednio w gruncie	kabel wielożyłowy w rurze osłonowej w gruncie	kabel wielożyłowy w rurze osłonowej w gruncie	układ 3 kabli jednożyłowych w rurze instalacyjnej w izolowanej cieplnie ścianie	układ 3 kabli jednożyłowych w rurze istalacyjnej/ listwie naściennej na ścianie murowanej lub drewnianej	Układ 3 kabli jednożyłowych (układ trójkąt) w powietrzu korytko perforowane/siatkowe	Układ 3 kabli jednożyłowych (układ trójkąt) bezpośrednio w gruncie	Układ 3 kabli jednożyłowych (układ trójkat) w rurze osłonowej w gruncie	kabel wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	kabel wielożyłowy bezpośrednio w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej w ścianie izolowanej cieplnie	kabel wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	kabel wielożyłowy w rurze instalacyjnej/listwie naściennej na ścianie murowanej lub drewnianej	kabel wielożyłowy w powietrzu (korytko perforowane, siatkowe)	kabel wielożyłowy w powietrzu (korytko perforowane, siatkowe)
metoda referencyjna	A1	A1	A2 	A2	B2	B2	E	E	A1	A1	A2 	A2	B2	B2	E	E	A1	A1	A2 	A2	B2	B2	E	E	D2	D2	D1	D1	A1	B1	F	D2	D1	A1	A1	A2 	A2	B2	B2	E	E	D2	D2	D1	D1	A1	B1	F	D2	D1	A1	A1	A2 	A2	B2	B2	E	E	D2	D2	D1	D1	A1	B1	F	D2	D1	A1	A1	A2 	A2	B2	B2	E	E
`

const file2 = `
1.5	14.5	13.5	14	13	16.5	15	22	18.5	14.5	13.5	14	13	16.5	15	22	18.5	14.5	13.5	14	13	16.5	15	22	18.5	33	28	25	21	13.5	15.5		28	21	19	17	18.5	16.5	22	19.5	26	23	40	34	29	24	17	20		34	24																		19	17	18.5	16.5	22	19.5	26	24
2.5	19.5	18	18.5	17.5	23	20	30	25	19.5	18	18.5	17.5	23	20	30	25	19.5	18	18.5	17.5	23	20	30	25	42	36	34	28	18	21		36	28	26	23	25	22	30	26	36	32	52	45	38	33	23	28		45	33	20	19	19.5	18	23	21	28	24			30	25	19	22			25	26	23	25	22	30	26	36	32
4	26	24	25	23	30	27	40	34	26	24	25	23	30	27	40	34	26	24	25	23	30	27	40	34	57	49	43	35	24	28		49	35	35	31	33	30	40	35	49	42	69	58	50	42	31	37		58	42	27	25	26	24	31	28	38	32			38	33	25	29			33	35	31	33	30	40	35	49	42
6	34	31	32	29	38	34	51	43	34	31	32	29	38	34	51	43	34	31	32	29	38	34	51	43	72	61	54	44	31	36		61	44	45	40	42	38	51	44	63	54	87	73	62	51	40	48		73	51	35	32	33	31	40	35	49	42			49	41	32	38			41	45	40	42	38	51	44	63	53
10	46	42	43	39	52	46	70	60	46	42	43	39	52	46	70	60	46	42	43	39	52	46	70	60	96	81	70	59	42	50		81	59	61	54	57	51	69	60	86	75	115	97	83	68	54	66		97	68	48	44	45	41	54	48	67	58			64	54	44	52			54	61	54	57	51	69	60	86	74
16	61	56	57	52	69	62	94	80	61	56	57	52	69	62	94	80	61	56	57	52	69	62	94	80	124	105	92	75	56	68		105	75	81	73	76	68	91	80	115	100	150	126	107	88	73	88		126	88	64	58	60	55	72	64	91	77	114	96	83	69	58	71		96	69	81	73	76	68	91	80	115	98
25	80	73	75	68	90	80	119	101	80	73	75	68	90	80	119	101	80	73	75	68	90	80	119	101	165	138	116	96	73	89	110	138	96	106	95	99	89	119	105	149	127	193	160	136	113	95	117	135	160	113	84	76	78	71	94	84	108	97	147	123	106	88	76	93	103	123	88	106	95	99	89	119	105	149	133
35	99	89	92	83	111	99	148	126	99	89	92	83	111	99	148	126	99	89	92	83	111	99	148	126	198	165	140	115	89	110	137	165	115	131	117	121	109	146	128	185	158	232	193	164	135	117	144	169	193	135	103	94	96	87	115	103	135	120	175	147	127	106	94	116	129	147	106	131	117	121	109	146	128	185	162
50	119	108	110	99	133	118	180	153	119	108	110	99	133	118	180	153	119	108	110	99	133	118	180	153	234	195	165	136	108	134	167	195	136	158	141	145	130	175	154	225	192	274	229	193	159	141	175	207	229	159	125	113	115	104	138	124	164	146	208	175	151	125	113	140	159	175	125	158	141	145	130	175	154	225	197
70	151	136	139	125	168	149	232	196	151	136	139	125	168	149	232	196	151	136	139	125	168	149	232	196	288	243	204	168	136	171	216	243	168	200	179	183	164	221	194	289	246	337	282	239	197	179	222	268	282	197	158	142	145	131	175	156	211	187	255	216	186	153	142	179	206	216	153	200	179	183	164	221	194	289	250
95	182	164	167	150	201	179	282	238	182	164	167	150	201	179	282	238	182	164	167	150	201	179	282	238	345	289	240	199	164	207	264	289	199	241	216	220	197	265	233	352	298	405	339	282	232	216	269	328	339	232	191	171	175	157	210	188	257	227	306	258	219	181	171	217	253	258	181	241	216	220	197	265	233	352	308
120	210	188	192	172	232	206	328	276	210	188	192	172	232	206	328	276	210	188	192	172	232	206	328	276	391	330	272	226	188	239	308	330	226	278	249	253	227	305	268	410	346	459	385	319	263	249	312	383	385	263	220	197	201	180	242	216	300	263	349	295	248	205	197	251	296	295	205	278	249	253	227	305	268	410	359
150	240	216	219	196	258	225	379	319	240	216	219	196	258	225	379	319	240	216	219	196	258	225	379	319	439	369	307	256	216	262	356	369	256	318	285	290	259	334	300	473	399	514	430	361	296	285	342	444	430	296	253	226	230	206	261	240	346	304	391	330	280	232	226	267	343	330	232	318	285	290	259	334	300	473	412
185	273	245	248	223	294	255	434	364	273	245	248	223	294	255	434	364	273	245	248	223	294	255	434	364	496	417	344	286	245	296	409	417	286	362	324	329	295	384	340	542	456	580	486	404	331	324	384	510	486	331	288	256	262	233	300	272	397	347	444	375	315	259	256	300	395	375	259	362	324	329	295	384	340	542	475
240	321	286	291	261	344	297	519	430	321	286	291	261	344	297	519	430	321	286	291	261	344	297	519	430	573	480	396	330	286	346	485	480	330	424	380	386	346	459	398	641	538	672	562	466	382	380	450	607	562	382	338	300	307	273	358	318	470	409	514	435	362	298	300	351	471	435	298	424	380	386	346	459	398	641	564
300	367	328	334	298	394	339	593	497	367	328	334	298	394	339	593	497	367	328	334	298	394	339	593	497	640	538	447	372	328	394	561	538	372	486	435	442	396	532	455	741	621	753	628	526	430	435	514	703	628	430	387	344	352	313	415	364	543	471	579	489	408	337	344	402	547	489	337	486	435	442	396	532	455	741	649
`

// obwod: - "1 fazowy" | "3 fazowy"
// metoda: - "A1", "A2", "B1", "B2"

const getMatchingIndexes = (obj, key, value, indexes) => {
    if (!indexes) {
        indexes = obj[key].map((_, i) => i);
    }
    console.log(key, indexes)
    const newIndexes = obj[key].reduce((acc, curr, index) => {
        if (curr === value && indexes.includes(index)) {
            acc.push(index)
        }
        return acc
    }, [])
    return newIndexes
}

const getFilteredIndexes = (specification, input) => {
    let filteredIndexes = null;
    Object.entries(input).forEach(([key, val]) => {
        filteredIndexes = getMatchingIndexes(specification, key, val, filteredIndexes)
    })
    return filteredIndexes
}

const CSVtoObj = (csv) => {
    const obj = {};
    csv.forEach((row) => {
        obj[row[0]] = row.slice(1)
    })
    return obj
}

const EXCEL_DELIMITER = ';'
const SHEETS_DELIMITER = '\t'

function transpose(matrix) {
    return matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));
  }


export const backend = (inputs, configs) => {
    console.log("hddhd")
    const parsedInput = {}
    //2 3-core 3-wire
    switch(inputs["numberOfStrands"]) {
        case "3-core": {
            parsedInput["obwód"] = "3 fazowy";
            parsedInput["liczba żył obciążonych prądowo"] = "3"
            parsedInput["liczba żył"] = "1";
            break;
        }
        case "2": {
            parsedInput["obwód"] = "1 fazowy"
            parsedInput["liczba żył obciążonych prądowo"] = "2"
            parsedInput["liczba żył"] = "3"
            break;
        }
        case "3-wire": {
            parsedInput["obwód"] = "3 fazowy"
            parsedInput["liczba żył obciążonych prądowo"] = "3"
            parsedInput["liczba żył"] = "4 lub 5"
            break;
        }
    }
    let temperature;
    let resistivity;
    switch(inputs["temperatureType"]) {
        case "air": {
            temperature = inputs["temperatureValue"]

            break;
        }
        case "ground": {
            temperature = inputs["temperatureValue"]
        }
    }

    if (inputs["type"] === "yakxs") {
        parsedInput["rodzaj żyły (metal)"] = "Al."    
    } else {
        parsedInput["rodzaj żyły (metal)"] = "Cu"
    }

    parsedInput["przewód/kabel"] = inputs["type"];
    parsedInput["metoda referencyjna"] = inputs["installationMethod"];
    
    const typeTranslations = {
      "ydy": "YDY 450/750 V",
      "ydyp": "YDYp 450/750 V",
      "yky": "YKY 0,6/1kV",
      "ykxs": "YKXS 0,6/1kV",
      "n2xh": "N2XH 0,6/1kV",
      "yakxs": "YAKXS 0,6/1kV"
    }

    const insulatorTranslations = {
        "pvc": "PVC",
        "xlpe": "XLPE",
        "b2ca": "XLPE"
    }

    parsedInput["przewód/kabel"] = typeTranslations[inputs["type"]]
    parsedInput["izolacja"] = insulatorTranslations[inputs["insulator"]];
    
    const specificationMatrix = file1.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));
    const referenceMatrix = file2.toString().trim().split('\n').map(line => line.trim().split(SHEETS_DELIMITER).map(str => str.trim()));

    const specification = CSVtoObj(specificationMatrix);
    const reference = CSVtoObj(referenceMatrix)

    const indexes = getFilteredIndexes(specification, parsedInput)
    const specificationKeys = Object.keys(specification)
    const values = specificationMatrix.map((row) => row.filter((_, index) => indexes.includes(index-1)))
    let referenceKeys = Object.keys(reference)
    referenceKeys = referenceKeys.sort((v, v2) => parseFloat(v) - parseFloat(v2));
    const values2 = referenceMatrix.map((row) => row.filter((_, index) => indexes.includes(index-1)))
    const resultObj1 = Object.fromEntries(transpose([specificationKeys, values.flat()]))
    const resultObj2 = Object.fromEntries(transpose([referenceKeys, values2.flat()]))

    //console.log(final(input, temperature));
    let result;
    if (!configs) {
        return;
    }
    if (configs.route === "P") {
        if(resultObj1["obwód"]=="1 fazowy") {
            result = configs.p/(230*configs.fi);
        }
        else {
            result = configs.p/(Math.sqrt(3)*400*configs.fi)
        }
    } else {
        result = configs.Iobl
    }

    const theColumn = values2.flat()

    const theResult = result * algorithm1(parsedInput, temperature) * 0.85;
    
    let bestFit = theColumn[0]
    
    for (let value of theColumn) {
        bestFit = value
        if (parseFloat(value) > theResult) {
            break
        }
    }

    let resultIndex = theColumn.indexOf(bestFit);


    console.log("jdfj", referenceKeys[bestFit])
    parsedInput["reeeee"] = inputs["type"]
    parsedInput["japierdole"] = `${parsedInput["przewód/kabel"]} ${parsedInput["liczba żył"]}x${bestFit}`
    return { ...parsedInput, ...resultObj1 }
}
let input = {
    "obwód": "1 fazowy",
    "metoda referencyjna": "D1",
    "izolacja": "XLPE",
    "rodzaj żyły (metal)": "Cu"
}
//!!
// backend({
//     "metal": "Cu",
//     "type": "ydy",
//     "insulator": "pvc",
//     "numberOfStrands": "3-wire",
//     "installationMethod": "A1",
//     "temperatureType": "air",
//     "temperatureValue": 30
//   })

backend({
    "metal": "Cu",
    "type": "ydy",
    "insulator": "pvc",
    "numberOfStrands": "3-core",
    "installationMethod": "A1",
    "temperatureType": "air",
    "temperatureValue": 30
  })

// const nazwa = "ydy"
// const nazwa = "ntk"
