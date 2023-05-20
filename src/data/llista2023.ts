import type { CloudinaryImageId } from '../misc/cloudinary'

interface Candidat {
  nom: string
  imageFrontal: CloudinaryImageId
  imageCercle: CloudinaryImageId
  bio: string
}

type Suplent = Omit<Candidat, 'imageCercle' | 'imageFrontal'>

export const llista2023: Candidat[] = [
  {
    nom: 'Toni Segarra',
    imageFrontal: '2023-llista-frontal/1_DSC02904',
    imageCercle: '2023-llista-cercle/1_DSC02904-min',
    bio: `Enginyer Industrial, Catedràtic de Matemàtiques. Va ser primer Tinent d’Alcalde del primer ajuntament democràtic de Mataró. Regidor d’Educació, Cultura i Festes. Creador de les xarxes municipals d’Escoles Bressol i Escoles d’Adults de Mataró. És aficionat al cinema, a la novel·la negra, a la ciència-ficció i al còmic. És membre del Grup Ferroviari Mataró. Va ser impulsor del Cinefòrum a Argentona. És soci del Centre Parroquial d'Argentona i de l’Aula d’Extensió Universitària.`,
  },
  {
    nom: 'Isabel Sunyer',
    imageFrontal: '2023-llista-frontal/2_DSC02769b1',
    imageCercle: '2023-llista-cercle/2_DSC02769b1-min',
    bio: `Mestra, postgrau en Logopèdia i postgrau en Educació Emocional i Benestar per la UB. Ha exercit la docència 31 anys a les escoles d’Argentona Bernat de Riudemeia i Argentona, com a mestra d’Educació especial i integració. Li agrada fer ceràmica, el cinema, la lectura, contar contes i visitar museus. Gaudeix de la conversa amb els amics. Ha estat presidenta, durant 15 anys, de l’Associació “Xarxa Argentona”, d’Espectacle Infantil i Juvenil. Actualment vocal de Xarxa Argentona, canta al Cor de Gòspel i és sòcia dels amic de la Poesia d'Argentona i de Creu Roja.`,
  },
  {
    nom: 'Joan Boba',
    imageFrontal: '2023-llista-frontal/3_DSC02803b_opt',
    imageCercle: '2023-llista-cercle/3_DSC02803b-min',
    bio: `Empresari d’arts gràfiques. Va ser patró de la Fundació El Maresme i va presidir l’Associació de Pares de la Fundació El Maresme. Va ser també fundador de l’Escola d’Educació Especial Les Aigües on va presidir l’Associació de Pares. Li agrada fer caminades, la jardineria i el teatre. Ha estat membre en diverses legislatures de la Comissió de Participació Ciutadana, del Consell de la Vila i de la Comissió de Mitjans de Comunicació Municipals. Col.labora amb el Centre Parroquial.`,
  },
  {
    nom: 'Isabel Lladó',
    imageFrontal: '2023-llista-frontal/4_DSC02941b_opt',
    imageCercle: '2023-llista-cercle/4_DSC02941b-min',
    bio: `Grau mitjà d’auxiliar d’Infermeria. Empresària en el món de la restauració. Li agrada fer caminades amb els amics pels boscos de Catalunya, viatjar amb moto i el teatre. Ha format part de la Junta del Centru, de l’AMPA de l’escola Les Fonts, ha estat fundadora d’Argentona es Mou i de Diables d’Argentona, i membre del Cor de Gòspel d’Argentona. És sòcia del Grup de Muntanya d’Argentona i està federada a la FEEC.`,
  },
  {
    nom: 'Isidre Viñas',
    imageFrontal: '2023-llista-frontal/5_DSC02818b_opt',
    imageCercle: '2023-llista-cercle/5_DSC02818b-min',
    bio: `Màster en arquitectura per l'ETSAB, Universitat Politècnica de Catalunya. Cap de Projectes Urbans a l’Ajuntament de Sant Feliu de Llobregat durant més de 30 anys. Té àmplia experiència en projectes d’equipaments i espai públic i està especialitzat en processos de participació ciutadana. En el temps lliure, li agrada jugar a golf i llegir. I, quan pot, viatjar. És veí d’Argentona des de 2018 i té moltes ganes de treballar per al poble que ha escollit per a viure-hi. És membre del Patronat del Museu del Càntir.`,
  },
  {
    nom: 'Rut Ligos',
    imageFrontal: '2023-llista-frontal/6_DSC03096',
    imageCercle: '2023-llista-cercle/6_DSC03096-min',
    bio: `Administrativa, ex-pagesa i emprenedora. Postgrau Escola de Cultura de Pau a la UAB, és activista pels drets humans. Actualment és sòcia treballadora a La Feixa Supermercat Cooperatiu. És ecologista i viatgera, i li agraden les caminades en contacte amb la natura. És membre activa de Diables d'Argentona. I, com a particularitat, ha estat instigadora de la recuperació de la Foguera de Sant Joan i de les Bruixes Remeieres.`,
  },
  {
    nom: 'Eusebi Traby',
    imageFrontal: '2023-llista-frontal/7_DSC02755_opt',
    imageCercle: '2023-llista-cercle/7_DSC02755-min',
    bio: `Graduat Social. Seminaris de gestió de personal. Li agrada la cuina i anar a buscar bolets. En l’àmbit de la política municipal ha estat regidor de l’Ajuntament d’Argentona, conseller de la Companyia d'Aigües d'Argentona durant 6 anys, integrant de la Comissió especial de comptes de l'Ajuntament d'Argentona i membre de l’Àrea de Mitjans de Comunicació d'Argentona. És soci de l'associació de veïns d'Argentona. Integrant de la Junta de l'Associació de veïns de les Ginesteres.`,
  },
  {
    nom: 'Araceli Ferrer',
    imageFrontal: '2023-llista-frontal/8_DSC02819',
    imageCercle: '2023-llista-cercle/8_DSC02819-min',
    bio: `Llicenciada en Filologia hispànica. Ha exercit la docència a Argentona 39 anys, primer a l’escola Bernat de Riudemeia (d’on va ser-ne directora) i, després, a l’institut. Li agrada llegir i escriure, el teatre, cinema, conversar amb els amics i trobar-se amb coneguts pel carrer Gran quan surt a comprar a les botigues del poble. Va ser co-fundadora de “Rialles” local, entitat promotora i organitzadora d'espectacles per al públic familiar -actualment Xarxa Argentona- i co-fundadora de l’Aula d’Extensió Universitària d'Argentona, entitat de la qual és secretària.`,
  },
  {
    nom: 'Xavier Rodríguez',
    imageFrontal: '2023-llista-frontal/9_DSC03094',
    imageCercle: '2023-llista-cercle/9_DSC03094-min',
    bio: `Graduat en Ciències de l’Activitat Física i l’Esport (CAFE). Màster en Alt Rendiment i Màster en Professorat de Secundària, Batxillerat i Formació Professional. Consultor de rendiment a Behind The Athlete. Li agrada llegir, gaudir de la bona companyia o un bon contingut audiovisual. Sempre ha estat vinculat al món del bàsquet, passant per diferents rols: jugador, entrenador, preparador físic i director tècnic. Aquest últim rol al CB Argentona durant 4 temporades, el club de la seva vida.`,
  },
  {
    nom: 'Imma Collet',
    imageFrontal: '2023-llista-frontal/10_DSC03089',
    imageCercle: '2023-llista-cercle/10_DSC03089-min',
    bio: `Diplomada d'Infermeria, postgrau d'Infermeria clínica, exercint sempre a la Sanitat Pública. Li agrada el cinema, el teatre la lectura i conversar amb els amics. Va formar part de l'AMPA i Consell escolar a l'escola Francesc Burniol. Està implicada des de sempre en la política municipal. Ha estat membre del Patronat del Museu del Càntir. És sòcia del centre d'estudis Argentonins i de l'aula universitària.`,
  },
  {
    nom: 'Joan Vera',
    imageFrontal: '2023-llista-frontal/11_DSC02897',
    imageCercle: '2023-llista-cercle/11_DSC02897-min',
    bio: `Mestre Industrial. Informàtic des del 1986 (Programador, Analista, Implantador i Consultor). Sindicalista de la CSUT i de CC.OO. Viatjar, la natura, el teatre, el cinema i els esports en general (té títol d'entrenador de bàsquet), són les seves aficions. Practica setmanalment natació i senderisme. És membre de la junta de l'entitat Natura Maresme i soci del Grup de Muntanya d'Argentona.`,
  },
  {
    nom: 'Eli Guirado',
    imageFrontal: '2023-llista-frontal/12_DSC03195',
    imageCercle: '2023-llista-cercle/12_DSC03195-min',
    bio: `Graduada en Relacions Públiques i Llicenciada en Publicitat i Relacions Públiques per la UB. Actualment ha emprès un negoci i col·labora amb una empresa familiar austríaca de cosmètica ecològica, vegana i sostenible. Li agrada cuinar -i tot el que té a veure amb la cuina saludable-, llegir, escriure i el ioga. Des de fa poc, forma part de la junta del veïnat de Les Ginesteres i va formar part de la comissió de festes d'aquest mateix veïnat.`,
  },
  {
    nom: 'Rosendo Domingo',
    imageFrontal: '2023-llista-frontal/13_DSC03178',
    imageCercle: '2023-llista-cercle/13_DSC03178-min',
    bio: `Veí de Can Cabot. Ex-president de l’Associació de Veïns i actual tresorer. Jubilat. Ha treballat en la restauració al restaurant La Colometa de Gràcia (Barcelona) i a Cala Monoys. Aficionat a la natura.`,
  },
  {
    nom: 'Montse Terricabras',
    imageFrontal: '2023-llista-frontal/14_DSC03320_opt',
    imageCercle: '2023-llista-cercle/14_DSC03320-min',
    bio: `Més de 20 anys despatxant a la Plaça de Vendre i amb molta experiència com a súper cuidadora de canalla. Pal de paller de Voluntariat d’Argentona des de fa 12 anys, participa activament a la Festa Major, Diada de la Flor, Missatgers reials i Cavalcada de Reis. Sempre disposada a col·laborar per fer d’Argentona un poble alegre i festiu.`,
  },
  {
    nom: 'Albert Vila',
    imageFrontal: '2023-llista-frontal/15_DSC03079',
    imageCercle: '2023-llista-cercle/15_DSC03082',
    bio: `Enginyer Industrial per la ETSEIB, UPC. Es dedica al desenvolupament de software (apps per a mòbil i aplicacions web). Li agrada el cinema, el teatre i assisteix regularment a conferències, organitzades per diferents associacions del poble, mogut per interessos en camps molt diversos. Ha format part de l’organització de la Garrinada, va col·laborar en l’organització de la consulta popular del 13D amb Argentona pel Dret a Decidir i actualment participa a l’ANC Argentona.`,
  },
  {
    nom: 'Isabel Cunyat',
    imageFrontal: '2023-llista-frontal/16_DSC03215',
    imageCercle: '2023-llista-cercle/16_DSC03215-min',
    bio: `Cuinera de professió i emprenedora. Cuinera a la Llar Santa Anna. Posteriorment, va fundar la seva pròpia empresa. Molt implicada en la vida pública del poble, disposada sempre a col·laborar i compartir amb les persones i entitats. Ha estat voluntària de la Parròquia al Centre Parroquial i és presidenta de la Coral Llaç d’Amistat. Actualment imparteix Tallers de cuina per a gent gran al Casal d’avis.`,
  },
  {
    nom: 'Savino Riccó',
    imageFrontal: '2023-llista-frontal/17_DSC03182',
    imageCercle: '2023-llista-cercle/17_DSC03182-min',
    bio: `Ha sigut obrer de la FIAT i policia forestal. És pensionista. Activista. Participa en qualsevol forma de protesta en defensa dels drets humans, la justícia i la llibertat. La seva afició és la pesca lúdica. Ha col·laborat amb la Coordinadora en defensa de la Sanitat pública de Mataró. Voluntari ADF. Va començar al 68 amb la defensa dels drets de la dona a Itàlia.`,
  },
]

export const suplents2023: Suplent[] = [
  {
    nom: 'Angelina Carbonell',
    bio: `Als 18 anys va muntar un taller de modista on va exercir la professió fins als 35. Després d’unes oposicions, va entrar com administrativa a l’ICS,on hi va treballar 35 anys. El teatre ha estat la seva afició principal. I llegir i caminar, cosa que ha fet sempre. A finals dels anys 60, junt amb un grup de joves, va fundar el grup de teatre l’Estruc al poble. Col·labora amb el Consell per la República i l’ANC locals.`,
  },
  {
    nom: 'Antoni Martí',
    bio: `Mestre de primària del 1962 al 1983 a Mataró i des de el 1983 al 2004 a Argentona. Director durant 4 anys de l'escola Bernat de Riudemeia. Soci fundador de la USTEC (Unió Sindical dels Treballadors d‘Ensenyament de Catalunya). És aficionat a viatjar, caminar pel bosc, el teatre i el cinema. Va ser co-fundador el 1989 del grup Rialles Argentona (antecessor de l'actual Xarxa d'espectacles infantil i juvenil) i membre de la junta fins el 2020.`,
  },
  {
    nom: 'Carme Famadas',
    bio: `Va anar al col·legi de les monges “Immaculada Concepció” d’Argentona i allà va néixer la seva afició pel bàsquet. Va treballar a l’escola bressol El Gegant del Pi i a l’escola Francesc Burniol com a monitora. Li agrada anar amb bicicleta, activitat que practica habitualment, el cinema i el teatre. Amb l’equip del CIC (Col·legi Immaculada Concepció) van ser campiones d’Europa en categoria júnior dues vegades i, una vegada, sub-campiones. Posteriorment, jugant amb el CB. Mataró, l’equip va ser 3 vegades campió d’Espanya i, ella, a títol individual, va ser escollida, també 3 vegades, com a millor jugadora d’Espanya.`,
  },
  {
    nom: 'Ricard Aymerich',
    bio: `Mestre i psicòleg. Ha treballat a les escoles Anxaneta i Montserrat Solà de Mataró (de les que n’ha sigut també director) i a l’Institut d’Argentona. Membre del Consell Escolar de Catalunya (des del 2006). Li agrada escoltar la música i tocar la guitarra, la lectura, la conversa, jugar amb els néts, les passejades amb bicicleta, el cinema, el teatre, les exposicions en qualsevol format artístic, el bricolatge domèstic… Ha estat regidor d’Educació d’Argentona (2006-2007). Ha format part del grup local de Rialles (més tard Xarxa d’espectacles). És soci del Centre d’Estudis Argentonins, dels Amics de Puig i Cadafalch i del Centre Parroquial.`,
  },
  {
    nom: 'Margarida Colomer',
    bio: `Llicenciada en Història i Geografia per la UAB. Historiadora, ha escrit diversos llibres d’història local i de la comarca. Jubilada de mestra i de professora d’història i geografia a l’ensenyança secundària. Entre les seves aficions, teatre, lectura i música. Ha estat regidora de cultura-festes i d’ensenyament a l’Ajuntament d’Argentona per l’Entesa, de 1999-2003. És membre de la junta del Centre d’Estudis Argentonins Jaume Clavell, sòcia dels Amics de J. Puig i Cadafalch, dels Amics de la Poesia d’Argentona.`,
  },
  {
    nom: 'Pep Famadas',
    bio: `Mestre, llicenciat en Pedagogia. Li agrada cuinar i anar a comprar en el petit comerç del poble. Va ser regidor en dues legislatures: per la CUPA en el primer ajuntament de la democràcia i també en el govern de l'Entesa. Co-fundador del Grup de Muntanya d’Argentona, entitat de la qual encara és membre actiu.`,
  },
  {
    nom: 'Cristina Navarro',
    bio: `Actriu i mestra. Postgrau en Pedagogia en arts escèniques. Directora de l'Aula de Teatre de l'Ajuntament de Mataró. Li agrada viatjar per descobrir noves maneres i cultures, muntanya i mar per desconnectar, navegar perquè la fa sentir lliure. Va ser regidora de Cultura, Festes i Joventut al govern de l’Entesa, i 4 anys a l’oposició. Implicada en la política municipal per millorar la vida de les persones del seu poble.`,
  },
]
