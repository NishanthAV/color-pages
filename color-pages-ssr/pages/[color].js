import colors from '../data/colors.json'

export default function Color({ color }) {
  return <div className='color-page' style={{ backgroundColor: color }}>
    <h1>{color}</h1>
  </div>
}

export async function getServerSideProps({ params }) {
  let color = params.color
  return { props: { color } }
}

// export async function getStaticPaths() {
//   const paths = colors.map(color => ({
//     params: { color: color.name }
//   }))

//   return { paths, fallback: false }
// }
