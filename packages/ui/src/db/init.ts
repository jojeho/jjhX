
import { Account, Client, Databases, Permission, Role, ID  ,Graphql} from 'appwrite';


function createCollction(name:string)
{
    const client = new Client();
    client.setEndpoint('http://158.247.220.223/v1')
    const account = new Account(client);
    const id = name +"_id"
    const dbid =process.env.NEXT_PUBLIC_DATABASE
    const graphql = new Graphql(client)
    console.log(id)
    const muation =graphql.mutation ({
        query :`databasesCreateCollection(
            databaseId: "[DATABASE_ID]",
            collectionId: "[COLLECTION_ID]",
            name: "[NAME]"
        ) {
            _id
            _createdAt
            _updatedAt
            _permissions
            databaseId
            name
            enabled
            documentSecurity
            attributes
            indexes {
                key
                type
                status
                error
                attributes
            }
        }`
    })
   


    muation.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

}
        
export function init()
{
const client = new Client();
client.setEndpoint('http://158.247.220.223/v1')
client.setProject('6562d6183f6961d7905f')


const account = new Account(client);

const id = 'web_config_id'
const c_id='navbar_id'
const graphql = new Graphql(client)
const muation =graphql.query(
{ query :
    `{databasesListDocuments(databaseId:"${id}" , collectionId:"${c_id}" )
      { total 
        documents{
            _id
        }
    
    }}`})

    muation.then((Response) => {
        console.log(Response.databasesListDocuments)
        // console.log(Response.data.databasesListDocuments.documents)
      })
}


init()
