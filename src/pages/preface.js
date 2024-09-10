import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const PrefacePage = () => {
  return (
    <Layout pageTitle="Preface">
      <h1>Vorwort</h1>
      <p>Hier steht in HTML:</p>
      <p>
        <p>-	Wie kommt es zu dieser Edition?</p>
        <p>-	Warum ist das wichtig?</p>
        <p>-	Warum digital?</p>
        <p>-	Herausforderungen</p>
        <p>-	Wie wird das Projekt möglich gemacht? Angelehnt an Henze, Weber, DTA Bf</p>
        <p>-	Tlw wortwörtlich, aber nicht gekennzeichnet, weil keine Forschungsergebnisse, sondern nur Editionsrichtlinine, gängige Praxis in der Editionspraxis</p>
        <p>-	Ausblick</p>
        <p>-	Dank</p>
        <p>-	Grußwort an die Nutzenden</p>
        <p>-	Datum, Unterschrift</p>
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Preface" />

export default PrefacePage