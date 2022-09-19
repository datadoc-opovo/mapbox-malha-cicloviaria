var config = {
    style:'mapbox://styles/cajazeiraramos/cl504f6ds000l15on58y42uge',
    accessToken:'pk.eyJ1IjoiY2FqYXplaXJhcmFtb3MiLCJhIjoiY2t1aWhlNGxlMHM1ZTJwbXg1NTl0eGFnYiJ9.fsmTcPSR244LBSvdDLVlTA',
    showMarkers: false,
    theme: 'light',
    subtitle: '',
    byline: '',
    init_location: {
            center: [-38.52, -3.775],
            zoom: 11,
            pitch: 45,
            bearing: 27
        }
};


let layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

let alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}


let escala_de_cores_sis_cicloviario = d3.scaleOrdinal()
.domain(["Ciclovia","Ciclofaixas","Ciclorotas","Passeios compartilhados"])
.range(['#6e9e44','#92c967','#bee09d','#dcf7c4']);

let escala_de_cores_idh = d3.scaleOrdinal()
.domain(["Muito Baixo","Baixo","Médio","Alto", "Muito Alto"])
.range(['#a34b4b','#e58d8c','#f1a662','#659bfc','#2b6af7']);


let escala_de_cores_tipologia = d3.scaleOrdinal()
.domain(["Ciclovia","Ciclofaixas","Ciclorotas","Passeios compartilhados"])
.range(['#6e9e44','#92c967','#bee09d','#dcf7c4']);

let cores_por_tipologia = [
        'Ciclovia','#6e9e44',
        'Ciclofaixas','#92c967',
        'Ciclorotas','#bee09d',
        'Passeios compartilhados','#dcf7c4'
];

let cores_por_IDH = [
    'Muito Baixo','#a34b4b',
    'Baixo','#e58d8c',
    'Médio','#f1a662',
    'Alto','#659bfc',
    'Muito Alto', '#2b6af7'
];

let cor_malha_cicloviaria = '#92c967', cor_malha_viaria='#eae406';


let info_box_por_bairro = new Map();
// idh_por_bairro = new Map(),
// faixaIdh_por_bairro = new Map(),
// ext_viaria_por_bairro = new Map(),
// ext_cicloviaria_por_bairro = new Map(),
// prop_por_bairro = new Map();

bairros.features.forEach(d=> {

    // console.log(d.properties);

    // Faixa IDH: "Muito Baixo"
    // NOME_BAIRRO: "ANCURI"
    // bairro: "Ancuri"
    // ext_eixo_cicloviario_atual: 0.57
    // ext_eixos_viarios: 28.12
    // id: 50
    // idhm_2010: 0.2043023
    // prop_cic_total: 2

    // idh_por_bairro.set(d.properties.bairro, d.properties.idhm_2010);
    // faixaIdh_por_bairro.set(d.properties.bairro, d.properties['Faixa IDH']);
    // ext_viaria_por_bairro.set(d.properties.bairro, d.properties.ext_eixos_viarios);
    // ext_cicloviaria_por_bairro.set(d.properties.bairro, d.properties.ext_eixo_cicloviario_atual);
    // prop_por_bairro.set(d.properties.bairro, d.properties.prop_cic_total);


    let infoBox = `
            <div class="caixa">
                <img src="cicloviaria-fortaleza/icone-marcador.png">
                <div class="info-caixa">
                    <h1>${d.properties.prop_cic_total}%</h1>
                    <p>das ruas e avenidas</p>
                </div>
            </div>
            <div class="info-dados">
                <div class="d-flex">
                <span class="bg-color" style="background-color:${escala_de_cores_idh(d.properties['Faixa IDH'])}"></span>
                <span>IDH ${d.properties['Faixa IDH']}: <strong class="Mersad-Black">${d.properties.idhm_2010.toFixed(3)}</strong></span>
                </div>
                <div class="d-flex">
                <img src="cicloviaria-fortaleza/ícone-viario.png">
                <span>Eixo Viário: <strong class="Mersad-Black">${d.properties.ext_eixos_viarios.toFixed(1)} km</strong></span>
                </div>
                <div class="d-flex">
                <img src="cicloviaria-fortaleza/ícone-cicloviario.png">
                <span>Eixo Cicloviário: <strong class="Mersad-Black">${d.properties.ext_eixo_cicloviario_atual.toFixed(1)} km</strong></span>
                </div>
            </div>
    
    `;

    info_box_por_bairro.set(d.properties.bairro, infoBox);

})




function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}
function getBairro(nome) {

    return map.querySourceFeatures('bairros', {
  
      sourceLayer: 'bairros',
      filter: ['==', ['get', 'bairro'], nome]
      
    })[0];
  
  }
function getCenter(nome) {

    let bairro = getBairro(nome);
    let center = turf.center(bairro.geometry).geometry.coordinates;
  
    return center;
  
}
const popup = new mapboxgl.Popup({
    closeButton: true,
    closeOnClick: true
});
function getContent(nome){
    
    if(nome != ''){
        
        bairro = map.querySourceFeatures('bairros', {  
            sourceLayer: 'bairros',
            filter: ['==', ['get', 'bairro'], nome]            
          })[0];

    return `<b>${bairro.properties.bairro}</b>
    <hr>
    <br><b>IDH:</b> ${bairro.properties.idhm_2010} 
    <br><b>Eixo viário Total</b>: ${bairro.properties.ext_eixos_viarios} km
    <br><b>Eixo Cicloviário</b>: ${bairro.properties.ext_eixo_cicloviario_atual} km
    <br><b>(%)</b>: ${bairro.properties.prop_cic_total}%

    `
    }else{
        return '';
    }

}
function bindPopUp(nome){
    if(nome != ''){
        
        bairro = map.querySourceFeatures('bairros', {  
            sourceLayer: 'bairros',
            filter: ['==', ['get', 'bairro'], nome]            
          })[0];

        var content = getContent(nome);
        // map.getCanvas().style.cursor = 'pointer';
        popup.setLngLat(getCenter(nome)).setHTML(content).addTo(map);
    }else{
        // map.getCanvas().style.cursor = '';
        popup.remove();
    }

}
function setDestaque(nome) {

    map.setFilter(
  
      'bairro-destacado', [
        '==', 
        ['get', 'bairro'], 
        nome
      ]
    );

    map.setFilter(
  
        'bairro-destacado-linha', [
          '==', 
          ['get', 'bairro'], 
          nome
        ]
      );

    // bindPopUp(nome);
    
  
}
function limpar(){
    setDestaque('');
    setOpctBairros(0);

}
function setOpctBairros(Opct){

    map.setPaintProperty(
        'bairrosLayers',
        'fill-opacity',
        Opct);
}
function pintaIDH(){
    // setOpctBairros(0.2);

    map.setPaintProperty(
        'bairrosLayers',
        'fill-color',
        ['match', 
            ['string', ['get', 'Faixa IDH']],
            ...cores_por_IDH,
            'white']
      );
    
}
function pintaProporcao(opacity){
    

    const features = map.queryRenderedFeatures({layers: ['bairrosLayers']});    
    const valores = features.map(d => d.properties.prop_cic_total);
    const max = Math.max(...valores);
    const min = Math.min(...valores);

    
    setOpctBairros(opacity);

    map.setPaintProperty(
        'bairrosLayers',
        'fill-color',
        [
          'interpolate', 
          ['linear'], 
          ['get', 'prop_cic_total'], 
          min, ['to-color', '#efedf5'],
          max, ['to-color', '#6e9e44'] 
        ]
    )
    
}
function limparBairros(){
    
    map.setPaintProperty(
        'bairrosLayers',
        'fill-opacity',
        0);
    
}


function setOpc_eixo_viario(Opct){

    map.setPaintProperty(
        'malha_viaria_layer',
        'line-opacity',
        Opct);
}

function setOpc_eixo_cicloviario(Opct){

    map.setPaintProperty(
        'malha_cicloviaria_layer',
        'line-opacity',
        Opct);
}