import Transfer from "../components/Transfer"
import Layout from '../components/layout2';

export default function TransferPage() {
  return (
    <Transfer/> 
  )
}
TransferPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
