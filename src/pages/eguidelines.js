import Layout from "../components/layout";
import * as React from 'react'
import Seo from '../components/seo'
import "./uPagesStyle.css"

const guidelines = () => {

    return (
        <Layout>
            <h1>Editionsrichtlinien</h1>
<h2>Vorbemerkung</h2>
<p>Die digitale Bürde-Gesamtausgabe (BüGA) ist an die etablierten Editionen Henze-Digital und die Weber-Gesamtausgabe angelehnt. Dabei dienten besonders deren 
    Editionsrichtlinien als Vorlagen für die vorliegende Arbeit. Diese wurden entsprechend der spezifischen Anforderungen der BüGA angepasst und ergänzt. 
    Teilweise wurden Formulierungen übernommen. Jene sind allerdings nicht als Zitat gekennzeichnet, da es sich nicht um Forschungsergebnisse handelt, 
    sondern um technisch-redaktionelle Standards. Zudem stellt die Orientierung an Richtlinien anderer Ausgaben eine gängige Herangehensweise in der Editionspraxis dar.</p>

<h2>I. Zu den aufgenommenen Textsorten</h2>
<p>Die digitale Bürde-Gesamtausgabe beinhaltet aktuell folgende Textsorten:
<ul>
<li>die Briefe an und von Bürde, inklusive Anlagen</li>
<li>offizielle Dokumente zur Biografie Bürdes</li>
</ul>
</p>
<p>Zudem wird die Edition durch Katalogdatensätze ergänzt, wie ein kommentiertes Personen- oder Ortsverzeichnis sowie ein Werkregister.</p>

<h2>II. Zum Umgang mit den Texten</h2>
<h3>1. Texttranskription</h3>
<p>Die Transkription der Texte orientiert sich grundsätzlich an den 1997 von der Mainzer Akademie der Wissenschaften vorgelegten Richtlinien-Empfehlungen zur Edition von Musikerbriefen, 
    welche sich auf gedruckte Briefausgaben beziehen. Eine digitale Briefausgabe bietet im Gegensatz zu einer gedruckten Version die Möglichkeit, verschiedene Darstellungsformen eines 
    Textes anzubieten, aus welchen die Nutzenden selbst auswählen können. Einzelfälle, welche durch die Codierung in der Texttranskription anders behandelt werden können als in den 
    Richtlinien-Empfehlungen vorgesehen, werden in Kapitel 3 zur Textcodierung näher erläutert.</p>
<p>Alle Texte werden prinzipiell diplomatisch wiedergegeben. Die originale Orthografie und die Zeichensetzung werden beibehalten; der originale Zeilenumbruch wird dokumentiert. 
    Mit Sonderfällen der veralteten Schreibweise wird wie folgt verfahren:</p>
<h5>Verdopplungsstriche (auch Geminationsstriche/Faulenzerstriche)</h5>
<p>Finden sich über den Buchstaben "m" und "n" jene Striche, werden sie stillschweigend in doppelte Buchstaben aufgelöst.</p>
<h5>Trennungs- bzw. Bindestriche</h5>
<p>In handschriftlichen Texten des 18. und 19. Jahrhunderts stehen die Formen "-", "=" und ":" oft gleichbedeutend nebeneinander. Diese werden stillschweigend zu "-" vereinfacht.</p>
<h5>Endsilbenverschleifung</h5>
<p>Die Endsilbenverschleifung ist eine häufig praktizierte Abkürzungsform, um den schnellen Schreibfluss aufrecht zu erhalten. Besonders bei den Endsilben „-nen“, „-nem“, „-ung“ tritt dies auf. 
    Endsilbenverschleifungen werden stillschweigend aufgelöst. Handelt es sich um eine bewusste Abkürzung (kenntlich gemacht durch einen Punkt), wird die Abkürzung nicht aufgelöst. 
    In nicht selbsterklärenden Fällen wird von den Herausgebenden eine Ausschreibung zur Auswahl angeboten.</p>
<h5>Doppelpunkte</h5>
<p>Doppelpunkte als Abkürzungspunkte werden stillschweigend von „:“ zu „.“ aufgelöst.</p>
<h5>Schriftbildveränderung am Zeilenende</h5>
<p>Ist am Zeilenende das Schriftbild beispielsweise durch eine Quetschung oder einen abwärts verlaufenden Bogen verändert, wird dies nicht gesondert codiert. 
    Derartige Schriftbildveränderungen sind für die vorliegende Edition nicht relevant.</p>
<h5>Name Jeannette Bürdes</h5>
<p>Zu Jeannette Bürde kursieren unterschiedliche Schreibweisen des Namens. Da sie ihre Briefe stets als <i>Jeannette</i> mit Doppel-N unterschrieben hat, wurde diese Schreibweise für die 
    vorliegende Edition übernommen. Zudem wird sie in Kommentaren oder vergleichbaren Textabschnitten stets <i>Bürde</i> genannt; auch dann, wenn es sich beispielsweise um einen Brief 
    vor ihrer Hochzeit handelt und sie eigentlich noch Jeannette Milder hieß. Damit ist eine Verwechslung mit ihrer Schwester Anna Milder zu vermeiden. Wird Bürde zusammen mit ihrem 
    Mann genannt, so wird dieser stets noch mit Vornamen (Friedrich Bürde) genannt.</p>

<h3>2. Quellenangaben</h3>
<p>Prinzipiell werden alle Informationen, welche kein Lexikonwissen sind, mit einer Quellenangabe versehen. Diese ist entweder in den Lesefluss eingewoben oder am Ende des 
    entsprechenden Textteils in Klammern vermerkt.</p>
<p>Adressbücher spielen bei der Identifizierung genannter Personen oft eine wichtige Rolle. Diese werden allerdings nicht einzeln als Quelle aufgelistet, 
    da sie primär der internen Verifikation dienen.</p>


<h2>III. Textcodierung</h2>
<h3>1. Vorbemerkung</h3>
<p>Grundsätzlich werden alle Texte mit zwei Hauptteilen codiert: Dem Header (<span class="codeElement">teiHeader</span>), welcher dem Apparatteil entspricht und dem Dokumententext (<span class="codeElement">text</span>). 
    Sind in den Dokumenten Notenbeispiele enthalten, so werden diese innerhalb des Elements <span class="codeElement">notatedMusic</span> als MEI-Datei eingefügt.</p>
<p>Im Dokumententext wird bei der Codierung grundsätzlich zunächst davon ausgegangen, dass alles handschriftlich in Kurrent und mit Tinte geschrieben wurde. Abweichungen hiervon (
    z.B. lateinische Schrift oder in Fraktur gedruckte Elemente) werden entweder codiert und in der Edition entsprechend dargestellt oder in der <span class="codeElement">physDesc</span> beschrieben.</p>
<p>Von der Redaktion erschlossene Elemente (z.B. fehlende Worte, fehlender Ort) sind in der Edition in eckigen Klammern dargestellt.</p>

<h3>2 Allgemeines</h3>
<h4>2.1 Strukturlemente</h4>
<p>Die Struktur der Texte wird grundsätzlich mit folgenden Elementen untergliedert:</p>
<p><span class="codeElement">text</span> (text); <span class="codeElement">div</span> (text division); <span class="codeElement">p</span> (paragraph); <span class="codeElement">pb/</span> (page beginning); <span class="codeElement">lb/</span> (line beginning); <span class="codeElement">table</span> (Tabelle); <span class="codeElement">item</span>; <span class="codeElement">l</span> (verse line)</p>
<p>In der Regel enthält ein Brief nur einen <span class="codeElement">div</span>. Ausnahmen sind Briefbeilagen wie z.B. ein Umschlag.</p>
<p>Die Verwendung des Elements <span class="codeElement">p</span>, welches zur Abtrennung von Absätzen verwendet wird, orientiert sich an der Struktur, welche der zu edierende Text vorgibt. 
Ausnahmen hiervon entstehen zwangsläufig bei Inhalten komplexer Struktur und an Stellen, an welchen durch das Schema bedingt ein <span class="codeElement">div</span> oder <span class="codeElement">p</span> erforderlich ist wie z. B. als Wrapper-Element für <span class="codeElement">address</span>.</p>

<h4>2.2 Hervorhebungen</h4>
<p>Texthervorhebungen (Unterstreichung, Hochstellung, andere Schriftart etc.) werden grundsätzlich mit dem Element <span class="codeElement">hi</span> (highlighted) gekennzeichnet.</p>
<h5>Unterstreichungen</h5>
<p>Eine Unterstreichung wird zusätzlich zur Hervorhebung noch mit dem Attribut <span class="codeAttribute">@rend=“underline“</span> versehen. Bei einer mehrfachen Unterstreichung 
wird deren Anzahl als z.B. <span class="codeAttribute">@n=“2“</span> angegeben.</p>
<h5>Hoch- /Tiefstellung</h5>
<p>Hoch- bzw. tiefgestellte Zeichen werden zusätzlich zur Hervorhebung mit dem Attribut <span class="codeAttribute">@rent="sup"</span> (superscipt letters, hochgestellt) 
bzw. <span class="codeAttribute">@rent="sub"</span> (subscript letters, tiefgestellt) gekennzeichnet.</p>





<h5>Lateinische Schrift</h5>
<p>Die Verwendung lateinisch geschriebener Textteile innerhalb eines in Kurrentschrift geschriebenen Textes werden zusätzlich zur Hervorhebung mit dem Attribut <span class="codeAttribute">@rend="latintype"</span> gekennzeichnet. Die Darstellung im angezeigten Text erfolgt in der Regel durch kursive im Unterschied zu gerader Schrifttype.</p>
<h5>Gesperrt</h5>
<p>Gesperrte Schrift, in der Regel verwendet in gedruckten Medien, wird zusätzlich zur Hervorhebung mit dem Attribut <span class="codeAttribute">@rent="spaced"</span> (spaced letters) versehen.</p>
       
        </Layout>
    )
}

export const Head = () => <Seo title="Edition Guidelines" />

export default guidelines