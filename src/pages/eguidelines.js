import Layout from "../components/layout";
import * as React from 'react'
import Seo from '../components/seo'
import "./uPagesStyle.css"

const guidelines = () => {

    return (
        <Layout>
            <h1>Editionsrichtlinien [Entwurf]</h1>
<h2>Vorbemerkung zu den Editionsrichtlinien</h2>
<p>Die vorliegenden Editionsrichtlinien sind an die der digitalen Henze-Briefedition sowie die der digitalen Weber-Gesamtausgabe angelehnt und an die Bedürfnisse der Briefe und Dokumente Jeannette Bürdes angepasst. Manche Formulierungen wurden wortwörtlich übernommen, jedoch nicht als Zitat gekennzeichnet, da es sich hierbei nicht um Forschungsergebnisse handelt. In der Editionspraxis ist diese Herangehensweise eine gängige Praxis.</p>

<h2>1.  Zu den aufgenommenen Textsorten</h2>
<p>Die digitale Bürde-Edition beinhaltet folgende Textsorten:
<ul>
<li>die Briefe an und von Bürde, inklusive Beilagen</li>
<li>handschriftliche, offizielle Dokumente zur Biografie</li>
<li><i>zeitgenössische Pressemitteilungen, welche Bürdes künstlerisches Schaffen oder ihre Biografie betreffen</i></li>
</ul>
</p>
<p>Zudem wird die Edition durch Katalogdatensätze ergänzt, wie ein kommentiertes Personen- oder Ortsverzeichnis sowie ein Werkregister. Zudem können weitere Verzeichnisse bei Bedarf durch entsprechende Such- oder Auswahlmöglichkeiten gebildet werden.</p>

<h2>2. Zum Umgang mit den Texten</h2>
<h3>2.1 Texttranskription</h3>
<p>Alle Texte werden prinzipiell diplomatisch wiedergegeben. Die originale Orthografie und Zeichensetzung werden beibehalten; der originale Zeilenumbruch wird dokumentiert. Mit Sonderfällen der veralteten Schreibweise wird wie folgt verfahren:</p>
<p><b>Verdopplungsstriche</b> (auch Geminationsstriche/Faulenzerstriche)</p>
<p>Finden sich über den Buchstaben "m" und "n" jene Striche, werden sie stillschweigend in doppelte Buchstaben aufgelöst.</p>
<p><b>Trennungs- bzw. Bindestriche</b></p>
<p>In handschriftlichen Texten des 18. und 19. Jahrhunderts stehen die Formen "-", "=" und ":" oft gleichbedeutend nebeneinander. Diese werden stillschweigend zu "-" vereinfacht.</p>
<p><b>Endsilbenverschleifung</b></p>
<p>Endsilbenverschleifung ist eine häufig praktizierte Abkürzungsform, um den schnellen Schreibfluss aufrecht zu erhalten. Besonders bei den Endsilben "-nen", "-nem", "-ung" tritt dies auf. Oft ist dabei kaum unterscheidbar, ob es sich um ein lediglich undeutlich ausgeschriebenes Wort oder eine "Kürzelschleife" handelt, die aus einem, dem deutschen Buchstaben "h" oder "l" ähnlichen Gebilde besteht. Solche Gebilde werden stillschweigend aufgelöst.</p>

<h2>3. Texttranskription</h2>
<h3>3.1 Vorbemerkung</h3>
<p>[noch zu schreiben]</p>
<h3>3.2 Allgemeines</h3>
<h4>3.2.1 Strukturlemente</h4>
<p>Die Struktur der Texte kann grundsätzlich mit folgenden Elementen untergliedert werden:</p>
<p><span class="codeElement">div</span> (text division); <span class="codeElement">p</span> (paragraph); <span class="codeElement">pb</span> (page beginning); <span class="codeElement">cb/</span> (column beginning); <span class="codeElement">lb/</span> (line beginning); <span class="codeElement">table/</span> (Tabelle); <span class="codeElement">list/</span> (Liste); <span class="codeElement">item/</span>; <span class="codeElement">lg/</span> (line group); <span class="codeElement">l/</span> (verse line)</p>
<p>Aus Tabellen bestehende Dokumentendatensätze, welche aus Registern von Institutionen (wie z.B. einer Kirche) bestehen, werden mit dem Element <span class="codeElement"><table/></span> codiert. Dabei wird lediglich die für Bürde relevante Zeile sowie jene Zeile, welche die Funktion der Spalten ausweist, wiedergegeben.</p>
<p>In der Regel enthält ein Brief nur einen <span class="codeElement">div</span>. Ausnahmen sind Briefe, die von verschiedenen Personen geschrieben sind, und Briefe, die eindeutig an verschiedenen Tagen geschrieben sind. Beilagen wie Dokumente oder Rezensionen aber auch Umschläge werden getrennt erfasst, aber in dem Brief verlinkt.</p>
<h4>3.2.1 Hervorhebungen</h4>
<p>Texthervorhebungen (Unterstreichung, Hochstellung, andere Schriftart etc.) werden grundsätzlich mit dem Element <hi/> (highlighted) gekennzeichnet.</p>
<h5>Unterstreichungen</h5>
<p>Einfache oder doppelte Unterstreichungen werden zusätzlich zur Hervorhebung mit zweierlei Attributen versehen: die Tatsache der Unterstreichung sowie der Zahl derselben, <span class="codeAttribute">@rend="underline" n="2"</span>.</p>
<h5>Hoch- /Tiefstellung</h5>
<p>Hoch- bzw. tiefgestellte Zeichen werden zusätzlich zur Hervorhebung mit dem Attribut <span class="codeAttribute">@rent="sup"</span> (superscipt letters, hochgestellt) bzw. <span class="codeAttribute">@rent="sub"</span> (subscript letters, tiefgestellt) ausgezeichnet.</p>
<h5>Gesperrt</h5>
<p>Gesperrte Schrift, in der Regel verwendet in gedruckten Medien, wird zusätzlich zur Hervorhebung mit dem Attribut <span class="codeAttribute">@rent="spaced"</span> (spaced letters) versehen.</p>
<h5>Lateinische Schrift</h5>
<p>Die Verwendung lateinisch geschriebener Textteile innerhalb eines in Kurrentschrift geschriebenen Textes werden zusätzlich zur Hervorhebung mit dem Attribut <span class="codeAttribute">@rend="latintype"</span> gekennzeichnet. Die Darstellung im angezeigten Text erfolgt in der Regel durch kursive im Unterschied zu gerader Schrifttype.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="Edition Guidelines" />

export default guidelines