import {Fragment} from 'react';

import PICUS from '../img/pic_1_grand.jpg'
import PICUS2 from '../img/pic1.jpeg'
import MANUS from '../img/Ioannis_Francisci_Pici_principis.tif.jpg'
import SETTE from '../img/le_sette.jpg'
import MARCEL from '../img/Marcel_ficin.jpg'
import PAGESOLEIL from '../img/pic_ecrit.jpg'




const Pico = () => {
    return (
    
    <Fragment>
    
    <div className="container_pico">
    
    <h1> Pico: Sa vie extraordinaire</h1>
    
    <img className="image_pico" src={PICUS} alt="Joan_Picus_della_Mirandola_img"/>
    {/*<img class="image_pico" src="../img/pic_1_grand.jpg" alt="Joan_Picus_della_Mirandola_img"></img>
    */}
    
   <h2> Pic de la Mirandole (1463-1494) était un philosophe, théologien et humaniste italien de la Renaissance. CONTE DE LA CONCORDE</h2>
   
   <h3> Il est surtout connu pour son "Discours sur la dignité de l'homme", qui est considéré comme l'un des textes fondateurs de la pensée humaniste.</h3>

 <h4>Voici quelques détails sur sa vie et ses travaux :</h4>

<img className="image_pico_2" src={PICUS2} alt="Joan_Picus_della_Mirandola_img2" />
{/*
<img class="image_pico_2" src="../img/pic1.jpeg" alt="Joan_Picus_della_Mirandola_img2"></img>
*/}

<p>Pic de la Mirandole est né dans une famille noble à Mirandola, en Italie. Il a étudié à l'université de Padoue, où il a appris le latin, le grec et l'hébreu. 
Il était également intéressé par la <strong> philosophie et la théologie, </strong> et a étudié les œuvres de Platon, d'Aristote et de saint Thomas d'Aquin.

<strong> En 1486, Pic de la Mirandole a écrit son célèbre "Discours sur la dignité de l'homme"(NDLR: à 23 ans!),</strong> qui est considéré comme un manifeste de l'humanisme. Dans ce texte, il affirme que l'homme est capable de s'élever au-dessus de sa condition naturelle et de devenir semblable à Dieu par sa connaissance et sa vertu. Le discours a été largement diffusé en Europe et a inspiré de nombreux humanistes.
Cependant, l'Eglise n'a pas vu du même oeil ses affirmations considérées comme hérétiques... Les notions de doctrine et de dogme étant - à l'époque- peu sujettes à la tolérance, quelques dizaines d'années avant l'apparition d'une inquisition ultra-violente par ses expéditions punitives. </p>

<img className="manuscrit" src={MANUS} alt="exemplaire_livre"/>
{/* <img class="manuscrit" src="../img/Ioannis_Francisci_Pici_principis.tif.jpg" alt="exemplaire_livre"></img>
 */}    

<p>Pic de la Mirandole a également écrit sur la philosophie et la théologie. Il a notamment étudié les œuvres de <strong>Plotin </strong> et de <strong>Proclus</strong>, deux philosophes néoplatoniciens. Il a également été influencé par la Kabbale juive, et a étudié l'hébreu pour mieux comprendre cette tradition vétéro-testamentaire.

Pic de la Mirandole a eu des contacts avec de nombreux intellectuels de son époque, notamment <strong>Marsile Ficin</strong> et Lorenzo de Medici (Laurent de Médicis). Il a également été impliqué dans des disputes théologiques avec l'Église catholique, et a été accusé d'hérésie à plusieurs reprises.

Pic de la Mirandole est mort prématurément à l'âge de 31 ans. Malgré sa courte vie, il a laissé une empreinte durable sur la philosophie et la théologie de la Renaissance.


<img className="les_sept" src={SETTE} alt="img le sette"/>
{/* <img class="les_sept" src="../img/le_sette.jpg" alt="img le sette"></img>
 */}


Le traité inachevé de Pico contre les ennemis de l'église comprend une discussion des lacunes de l'astrologie. Bien que cette critique soit religieuse plutôt que scientifique dans sa fondation, elle a influencé l'astronome <strong>Johannes Kepler,</strong> dont les études sur les mouvements planétaires sous-tendent l'astronomie moderne. 
Les autres œuvres de Pico comprennent une exposition de la <strong>Genèse intitulée Heptaplus (du grec hepta, "sept"),</strong> indiquant ses sept points d'argumentation, et un traitement synoptique de Platon et Aristote, dont l'œuvre achevée De ente et uno (De l'être et de l'unité) constitue une partie. Les œuvres de Pico ont été rassemblées pour la première fois dans Commentationes Joannis Pici Mirandulae (1495-1496).</p>



<h4> Résumé </h4>


    

<p>"Giovanni Pico della Mirandola, <strong>comte de Concordia </strong> était un érudit italien et un philosophe platonicien dont l'Oraison sur la dignité de l'homme (De hominis dignitate oratio), œuvre caractéristique de la Renaissance composée en 1486, reflétait sa méthode syncrétique consistant à prendre les meilleurs éléments d'autres philosophies et à les combiner dans son propre travail, en partie théologique.</p>

<h4> Famille, Origines </h4>

<p>Son père, Giovanni Francesco Pico, prince du petit territoire de Mirandola, a offert à son enfant précoce une éducation humaniste complète à la maison. Pico a ensuite étudié le droit canonique à Bologne et la philosophie aristotélicienne à Padoue, et a visité Paris et Florence, où il a appris l'hébreu, l'araméen et l'arabe. À Florence, il a rencontré Marsile Ficin, un philosophe platonicien de la Renaissance.</p>

<img className="marcile" src={MARCEL} alt="img Marsile Ficin"/>
{/* 
<img class="marcile" src="../img/Marcel_ficin.jpg" alt="img Marsile Ficin">Marcile Ficin</img>
*/}

<p>Présenté à la cabale hébraïque, <strong>Pico est devenu le premier érudit chrétien à utiliser la doctrine cabalistique pour soutenir la théologie chrétienne. </strong>

En 1486, prévoyant de défendre 900 thèses qu'il avait tirées de divers écrivains grecs, hébreux, arabes et latins, il a invité des savants de toute l'Europe à Rome pour un débat (joute!)publique. 

Pour l'occasion, il a composé sa célèbre Oraison. 

Toutefois, une commission papale a dénoncé 13 des thèses comme hérétiques, et l'assemblée a été interdite par le pape Innocent VIII. 
Malgré son Apologie pour les thèses qui s'ensuivit, Pico a jugé prudent de fuir en France mais a été arrêté là-bas. Après une brève détention à Vincennes, 
il s'est installé à Florence, où il s'est associé à l'Académie platonique, sous la protection du prince florentin Laurent de Medicis. 
Hormis de courts voyages à Ferrare, Pico a passé le reste de sa vie à Florence. Il a été absous de l'accusation d'hérésie par le pape Alexandre VI en 1492. </p>

<p> Vers la fin de sa vie, il est tombé sous l'influence de <strong>Girolamo Savonarola,</strong> strictement orthodoxe, martyr et ennemi de Laurent de Médicis. Ce qui lui vaudra (qui c'est?) son empoisonnement qui a été orchestré un jour où l'opinion était occupée par cette diversion: la venue de Charles VIII:M.Ficin écrit : « Notre cher Pico nous a quittés le jour même où Charles VIII entrait dans Florence, et les pleurs des lettrés compensaient l'allégresse du peuple. Sans la lumière apportée par le roi de France, peut-être Florence n'eût-elle jamais vu jour plus sombre que celui où s'éteignit la lumière de la Mirandole. »</p>

<p>Pico fut-il un précurseur de ce qui sera appelé plus tard, par un certain Luther, le protestantisme?</p>

<h2>INTUITION MODERNE</h2>

<p>Dans une vision parfois réductrice, nous parlons de la Réforme protestante comme si elle était apparue ex nihilo, sans précurseurs ni mouvements de fond. 

Les réformateurs auraient à eux seuls fait tout le travail en « redécouvrant » la Bible, et la Bible seulement. 
Mais le XVe siècle qui précéda la Réforme fut un véritable foisonnement d’idées nouvelles, de changements de perspective, parfois d’une rare modernité. C’est sans doute le cas de ce qui fut vécu à Florence au travers de « l’académie néo-platonicienne ». Platon fut effectivement retrouvé, relu à partir du début du XVe siècle, en contrepoint d’Aristote qui marqua la pensée scolastique du Moyen Âge. 

Cette académie fut fondée à l’initiative de Cosme de Médicis. Son fils Pierre, et surtout son petit-fils Laurent, dit « le Magnifique », développèrent cette académie. Elle avait pour but, à partir de cette nouvelle philosophie, de faire réfléchir et travailler tous les artistes (peintres, poètes, sculpteurs) avec les théologiens et philosophes. Une véritable expérience interdisciplinaire avant l’heure de la Renaissance</p>

 <h4> Parmis les figures de cette époque: </h4>

<p>Pic de la Mirandole (Giovanni Pico della Mirandola, 1463-1494) fut l’un des plus brillants, <strong>éclatant de jeunesse et de fulgurances novatrices. </strong>

Pour autant, c’était un homme qui voulut concilier l’ancien et le nouveau, rêvant de mettre d’accord les lecteurs d’Aristote (par l’intermédiaire d’Averroès) et ceux de Platon, dont son célèbre maître <strong>Marsile Ficin. </strong>

Ce fut un homme de contraste, tour à tour très proche du Vatican, et même du pape, puis accusé d’hérésie, et arrêté pour ses idées. Il trouva auprès de Laurent de Médicis un appui, mais la fin de sa vie l’en éloigna car il fut influencé par un prédicateur radical du renoncement : <strong>Savonarole. </strong>: pieux croyant assez extrême, qui a eu pris pour ennemi le Pape et qui ne tarrit pas de critiques envers les Médicis.

On sait maintenant, grâce aux recherches sur la dépouille de Pic de la Mirandole, qu’il fut assassiné, probablement par les Médicis, avec de l’arsenic.</p>

<img src={PAGESOLEIL} alt="page_manuscrit" />

<p>Homme de contraste, donc, qui chercha toujours une forme de « concordisme », entre Platon et Aristote d’une part, entre la philosophie (la raison) et la théologie (la foi) d’autre part. Il aurait pu siéger au comité d’Évangile et liberté ! Il refusa l’idée selon laquelle la philosophie serait, comme on le disait auparavant, « la servante (voire l’esclave) de la théologie ». 
Pour lui,<strong> « la philosophie cherche la vérité, la théologie la trouve ». 

Du coup, il ouvrit les portes du savoir, de manière très large puisqu’il intégra même la kabbale pour la christianiser de manière philosophique. </strong>

Il développa deux intuitions fondamentales. La première est que la Vérité est nécessairement dans l’au-delà de nos concepts et de nos dogmes. On retrouve cette pensée dans la peinture de cette époque, par exemple dans la<strong> « Calomnie d’Apelle » de Botticelli ou même dans la Cène de Vinci, </strong> où le doigt (souvent surdimensionné) pointe vers le ciel pour nous dire que la Vérité est au-delà des apparences. 

D’autre part, et c’est sa seconde intuition, en élargissant le champ du savoir, il accepta l’idée que toute pensée, toute construction est par essence « syncrétiste », fruit d’une rencontre entre des savoirs, des convictions, des cultures. À commencer par la Bible qui fut constituée d’une série d’ouvrages eux-mêmes influencés par d’autres textes. C’est à une véritable circulation de la pensée que Pic de la Mirandole nous invite encore aujourd’hui. Il refusa la segmentation de la pensée et la hiérarchisation des disciplines, ce qui me paraît aboutir à notre volonté de modernité théologique.


Enfin, son « discours sur la dignité de l’homme » demeure l’un des socles de l’humanisme chrétien, dont nous nous réclamons encore aujourd’hui. Plus qu’un témoin, ce fut un précurseur de notre modernité, même s’il voulut jusqu’au bout conserver des accents médiévaux…</p>

</div>

</Fragment>


); 
}

export default Pico