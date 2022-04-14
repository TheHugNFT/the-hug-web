import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import EmbraceHome from '../website-config/EmbraceHome'
import { SketchPicker } from 'react-color';
import ColorPicker from "../components/color-picker";


export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <p>let's mint</p>
            <p>Mint Custom (0.1) Eth:</p>
            <SketchPicker />
            Skin:  <ColorPicker />

            <table>
                <th>
                    <td></td>
                    <td>Left</td>
                    <td>Right</td>
                </th>
                <tr>
                    <td>Gender</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Skin</td>
                    <td><ColorPicker /></td>
                    <td><ColorPicker /></td>
                </tr>
                <tr>
                    <td>Shirt</td>
                    <td><ColorPicker /></td>
                    <td><ColorPicker /></td>
                </tr>
                <tr>
                    <td>Bottom</td>
                    <td><ColorPicker /></td>
                    <td><ColorPicker /></td>
                </tr>
            </table>
        </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
