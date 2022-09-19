function getZoomStep11(){
    console.log(Document.width)

    return 12;
    
}




var chapters = [
    {
        id: 'init',
        alignment: 'center',
        title: 'A distribuição do Sistema Cicloviário de Fortaleza-CE',
        location: {
            center: [-38.52, -3.78],
            zoom: 11.8,
            pitch: 60,
            bearing: 15
        },
        callback: 'limpar',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'aldeota',
        alignment: 'right',
        description: `
            Na <strong class="Mersad-Black">Aldeota</strong>, 
            bairro de IDH muito alto. as ciclofaixas ocupam
            `,
        infoBox: info_box_por_bairro.get('Aldeota'),
        location: {
            center: [-38.49, -3.75],
            zoom: 13.5,
            pitch: 40,
            bearing: 20
        },
        callback: 'step1',
        onChapterEnter: [],
        onChapterExit: []
    },
    
    {
        id: 'vilaVelha',
        alignment: 'left',
        description: `Enquanto no <b>Vila Velha</b>, 
        bairro de IDH muito baixo na zona Oeste de Fortaleza, 
        trechos com ciclovias e ciclofaixas ocupam
        `,
        infoBox: info_box_por_bairro.get('Vila Velha'),
        location: {
            center: [-38.60, -3.71],
            zoom: 13.4,
            pitch: 55,
            bearing: 85
        },
        callback: 'step2',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'conjuntoCearaII',
        alignment: 'right',
        description: `Descendo para o <b>Conjunto Ceará II</b>,
         que também tem IDH muito baixo, vemos que o sistema cicloviário ocupa apenas`,
        infoBox: info_box_por_bairro.get('Conjunto Ceará II'),
        location: {
            center: [-38.61, -3.77],
            zoom: 14.2,
            pitch: 60,
            bearing: 55
        },
        callback: 'step3',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'meireles',
        alignment: 'left',
        description: `E no <b>Meireles</b>, vizinho à <b>Aldeota</b>, 
        a proporção é de`,
        infoBox: info_box_por_bairro.get('Meireles'),
        location: {
            center: [-38.51, -3.727],
            zoom: 13.5,
            pitch: 40,
            bearing: 20
        },
        callback: 'step4',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'tauape',
        alignment: 'right',
        description: `Mas há exceções, 
        <br><br> O bairro <b>São João do Tauape</b>,
         de IDH muito baixo e malha viária semelhante à do Meireles (51,27 km de ruas e avenidas),
          as ciclovias, ciclofaixas e passeios compartilhados ocupam            
          `,
        infoBox: info_box_por_bairro.get('Tauape'),

        location: {
            center: [-38.505, -3.755],
            zoom: 13.5,
            pitch: 50,
            bearing: 20
        },
        callback: 'step5',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'tauape2',
        alignment: 'right',
        description: `
            Diferentemente da <b>Vila Velha</b> e do <b>Conjunto Ceará II</b>, o São João do Tauape está cercado por bairros de IDH mais alto que o dele e suas ciclofaixas fazem uma “ligação” entre as malhas cicloviárias desses outros bairros.
            `,

        location: {
            center: [-38.505, -3.755],
            zoom: 13.5,
            pitch: 50,
            bearing: 20
        },
        callback: 'step6',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'tauape3',
        alignment: 'center',
        description: 'Para as comparações anteriores, consideramos bairros com malha viária semelhante em quilômetros, independentemente da área total de cada um deles.',
        location: {
            center: [-38.52, -3.78],
            zoom: 12,
            pitch: 50,
            bearing: 20
        },
        callback: 'limpar',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'mouraBrasil',
        alignment: 'left',
        description: `O bairro <b>Moura Brasil</b> surge como um ponto fora da curva e se destaca com as ciclovias e ciclofaixas ocupando 
        `,
        infoBox: info_box_por_bairro.get('Moura Brasil'),
        location: {
            center: [-38.54, -3.719],
            zoom: 15,
            pitch: 40,
            bearing: 20
        },
        callback: 'step7',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'mouraBrasil',
        alignment: 'center',
        description: `
        Porém, isso se deve à extensão da malha viária: 9 km. 
        Esse é o segundo menor em extensão entre os bairros de IDH muito baixo e o quarto menor entre todos os bairros da Cidade.
        `,
        location: {
            center: [-38.54, -3.719],
            zoom: 15,
            pitch: 40,
            bearing: 20
        },
        // callback: 'step7',
        onChapterEnter: [],
        onChapterExit: []
    },        
    {
        id: 'parqueAraxa',
        alignment: 'right',
        description: `Já o <b>Parque Araxá</b>, de IDH baixo, 
        chama atenção por ter a maior proporção de malha cicloviária em relação à malha viária
         entre todos os bairros. 
         As ciclovias correspondem a 3,27 km dos 11,41 km de ruas do bairro — ou          
         `,
        infoBox: info_box_por_bairro.get('Parque Araxá'),
        location: {
            center: [-38.545, -3.735],
            zoom: 15,
            pitch: 60,
            bearing: 28
        },
        callback: 'step8',
        onChapterEnter: [],
        onChapterExit: []
    },

    {
        id: 'parqueAraxa2',
        alignment: 'left',
        description: `Além de ser um bairro menor, comparado a outros da Cidade, 
        o <b>Parque Araxá</b> está localizado próximo a regiões de grande fluxo, 
        como o entorno das avenidas <b>Bezerra de Menezes, Jovita Feitosa e Domingos Olímpio</b>.`,
        location: {
            center: [-38.55, -3.735],
            zoom: 15,
            pitch: 60,
            bearing: 35
        },
        callback: 'step8',
        onChapterEnter: [],
        onChapterExit: []
    },
    {
        id: 'bonsucesso',
        alignment: 'right',
        description: `O <b>Bonsucesso</b>, de IDH Muito Baixo, 
        também se destaca com uma ciclovia e quatro ciclofaixas — duas em cada sentido — 
        que atravessam o bairro. Juntas, elas somam 10,56 km de malha cicloviária e correspondem
         a `,
        infoBox: info_box_por_bairro.get('Bonsucesso'),
        location: {
            center: [-38.586, -3.782],
            zoom: 13.5,
            pitch: 40,
            bearing: 20
        },
        callback: 'step10',
        onChapterEnter: [],
        onChapterExit: []
    },
        
    {
        id: 'idh',
        alignment: 'center',
        title: `Veja a malha cicloviária sobre o mapa de IDH da Capital
        `,
        location: {
            center: [-38.52, -3.78],
            zoom: getZoomStep11(),
            pitch: 50,
            bearing: 20
        },
        callback: 'step11',
        onChapterEnter: [],
        onChapterExit: []
    },

    {
        id: 'idh',
        alignment: 'left',
        description: `
        <div class="info-dados">
        <div class="d-flex">
            <span class="bg-color" style="background-color:${escala_de_cores_idh('Muito Baixo')}"></span>
            <span>IDH Baixo (até 0.5)</strong></span>
        </div>
        <div class="d-flex">
            <span class="bg-color" style="background-color:${escala_de_cores_idh('Baixo')}"></span>
            <span>IDH Muito Baixo (0.5 .. 0.599)</strong></span>
        </div>
        <div class="d-flex">
            <span class="bg-color" style="background-color:${escala_de_cores_idh('Médio')}"></span>
            <span>IDH Médio (0.6 .. 0.699)</strong></span>
        </div>
        <div class="d-flex">
            <span class="bg-color" style="background-color:${escala_de_cores_idh('Alto')}"></span>
            <span>IDH Alto (0.7 .. 0.799)</strong></span>
        </div>
        <div class="d-flex">
            <span class="bg-color" style="background-color:${escala_de_cores_idh('Muito Alto')}"></span>
            <span>IDH Muito Alto ( >= 0.8)</strong></span>
        </div>
        
    </div>

        `,
        location: {
            center: [-38.52, -3.78],
            zoom: getZoomStep11(),
            pitch: 50,
            bearing: 20
        },
        callback: 'step11',
        onChapterEnter: [],
        onChapterExit: []
    },

    // {
    //     id: 'idh',
    //     alignment: 'center',
    //     title: '',
    //     image:'imgs/grafico.png',
    //     location: {
    //         center: [-38.52, -3.78],
    //         zoom: 12,
    //         pitch: 50,
    //         bearing: 20
    //     },
    //     callback: 'step11',
    //     onChapterEnter: [],
    //     onChapterExit: []
    // },
    // {
    //     id: 'prop',
    //     alignment: 'center',
    //     title: 'E sobre a proporção de cobertura cicloviária',
    //     location: {
    //         center: [-38.52, -3.78],
    //         zoom: 12,
    //         pitch: 50,
    //         bearing: 20
    //     },
    //     callback: 'step12',
    //     onChapterEnter: [],
    //     onChapterExit: []
    // },
    {
        id: 'fim',
        alignment: 'left',
        location: {
            center: [-38.52, -3.78],
            zoom: getZoomStep11(),
            pitch: 50,
            bearing: 20
        },
        onChapterEnter: [],
        onChapterExit: []
    },


]





function step1(){
    
    // Na Aldeota, bairro de IDH muito alto da capital cearense,
    //  as ciclofaixas ocupam 20% das ruas e avenidas.


    setDestaque('Aldeota');
    // map.setPaintProperty(
    //     'bairro-destacado',
    //     'fill-color',
    //     'gray'
    //   )

    // map.setPaintProperty(
    //     'bairrosLayers',
    //     'fill-opacity',
    //     0.2
    
    //   )
}
function step2(){
    // Em seguida vai até o bairro Vila Velha 
    // (mostrar área + malha cicloviária)

    setDestaque('Vila Velha');

}
function step3(){
    //Depois segue para destacar a área do Conjunto Ceará II 
    // (mostrar área + malha cicloviária)
    setDestaque('Conjunto Ceará II');

}
function step4(){
    //E em seguida volta para a área nobre e 
    // mostra o Meireles no mapa (mostrar área + malha cicloviária)
    setDestaque('Meireles');

}
function step5(){
    setOpctBairros(0);
    setDestaque('Tauape');}
function step6(){
    setDestaque('Tauape');
    setOpctBairros(0.2);
    pintaIDH();}
function step7(){
    //Mostrar o bairro Moura Brasil
    //  (mostrar área + malha cicloviária)
    setDestaque('Moura Brasil');}
function step8(){    
    setDestaque('Parque Araxá');}


function step10(){
    //Mostrar bairro Bonsucesso (mostrar área + malha cicloviária)

    setOpctBairros(0);
    setDestaque('Bonsucesso');
    map.setPaintProperty(
        'malha_viaria_layer',
        'line-opacity',
        0.5);
}
function step11(){
    //Mostrar bairro Bonsucesso (mostrar área + malha cicloviária)
    limpar();
    setOpctBairros(0.6);
    map.setPaintProperty(
        'malha_viaria_layer',
        'line-opacity',
        0);
    pintaIDH();
}
function step12(){
    //Mostrar bairro Bonsucesso (mostrar área + malha cicloviária)
    // limpar();
    pintaProporcao(0.8);
}
