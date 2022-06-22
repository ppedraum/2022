import styles from './styles.json';

import { StyleSheet, Text, View, Image } from 'react-native';


import StarRating from '../geral_components/StarRating';

export default function Comment({comment, replies}) {

    return (
        <View style={styles.comment} >

            <View style={styles.comment_right_part}>

                <View style={styles_main.row_view}>
                    <View style={styles_main.txt_24}><Text style={styles_main.txt_24}>{comment.username}</Text></View>
                    <StarRating/>
                    
                </View>

                <View><Text style={styles_main.txt_24}>{comment.body}</Text></View>
                { replies.length > 0 && (

                    <View style={styles.replies}>
                        {replies.map( (reply) => (
                            <Comment key={reply.id} comment={reply} replies={[]} />
                        ))}
                    </View>
                )}

            </View>
        </View>
    );
}

const styles_main = StyleSheet.create({

    main: {
        /* width: winDim().width, */
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E9EAEA",
        alignItems: "center",
    },

    txt_24:{
        /* fontFamily: 'Times New Roman', */
        fontSize: 24,
    },

    txt_24_white:{
        /* fontFamily: 'Times New Roman', */
        fontSize: 24,
        color: 'white',
    },

    title_24_bold:{
        /* fontFamily: 'Times New Roman', */
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    
    pfp_default:{

        borderRadius: 100,
        width: 139,
        height: 139,
        minWidth: 100,
        minHeight: 100,
    },

    nome_usuario:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 15,
        width: 294,
        height: 64,
        
    },

    pf_view:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: '#E9EAEA',
        width: 294,
        height: 233,
        marginBottom: 15,
        marginTop: 20,
    },

    tab_content_view:{
        display: "flex",
        flexDirection: "column",
    },

    nav_galeria:{
        display: 'flex',
        flexDirection: "row",
        width: 360,
        height: 40,
        backgroundColor: '#6F6F6F',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 14,
    },

    cell_view_vertical:{
        marginBottom: 10,
        marginTop: 10,
    },

    row_view:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
    },

    img_galeria:{
        margin: 4,
        width: 177,
        height: 177,
    },

});