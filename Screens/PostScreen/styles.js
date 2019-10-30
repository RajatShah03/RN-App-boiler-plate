import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    postModal: {
        width: '100%',
        height: '100%',
        zIndex: 1,
    },

    ScrollView: {
        height: "100%",
    },

    imageContainer: {
        position: "relative"
    },

    captionDiv: {
        width: '90%',
        flexDirection: 'row',
        marginHorizontal: "5%",
        marginBottom: "3%",
        marginTop: "1%"
    },

    userCaption: {
        fontSize: 16,
        fontWeight: "400",
        color: "#272727"
    },

    userCaptionInput: {
        fontSize: 16,
        fontWeight: "600",
        color: "#272727"
    },

    postInfo: {
        height: "auto",
        width: "100%",
        marginHorizontal: "auto",
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between"
    },

    postInfoLikeWrap: {
        width: "92%",
        marginLeft: "3%",
        marginRight: "5%"
    },

    userInfoWrapper: {
        marginHorizontal: "5%",
        paddingVertical: "5%",
        display: "flex",
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        borderTopColor: "rgba(151,151,151,0.48)",
        borderTopWidth: 0.6,
        borderBottomColor: "rgba(151,151,151,0.48)",
        borderBottomWidth: 0.6,
        marginBottom: "3%"
    },

    avatarContainer: {
        width: "60%",
        display: "flex",
        flexDirection: "row"
    },

    userName: {
        fontSize: 18,
        fontWeight: "900",
        color: "#282828"
    },

    userFollowers: {
        fontSize: 14,
        fontWeight: "600",
        color: "#424242"
    },

    userFollowersText: {
        fontSize: 12,
        fontWeight: "400",
        color: "#616161"
    },

    userNameWrap: {
        marginHorizontal: "5%",
        display: "flex",
        flexDirection: "column"
    },

    followUserButtonWrap: {
        width: "15%",
        display: "flex",
        alignItems: "flex-end"
    },

    followUserButton: {
        backgroundColor: "#eef4ff",
        width: 42, height: 42,
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    action: {
        height: '100%',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },

    taggedStyles: {
        width: "90%",
        marginHorizontal: "5%"
    },

    actionLeft: {
        width: '20%',
        justifyContent: 'flex-start'
    },

    actionRight: {
        width: '20%',
        justifyContent: 'flex-end'
    },

    styletype: {
        fontSize: 16,
        fontWeight: '900',
        color: "#1f54a2"
    },

    likeContainer: {
        height: "100%",
        width: '60%',
        display: "flex",
        alignItems: "flex-start",
        justifyContent: 'center'
    },

    iconLike: {
        width: "100%",
        height: "100%",
    },

    noOflikesDiv: {
        height: "100%",
        width: '40%',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: 'center',
    },

    userLikesCount: {
        fontSize: 16,
        fontWeight: "900",
        color: "#252525"
    },

    userLikesText: {
        fontSize: 11,
        fontWeight: "500",
        color: "#636363"
    },

    collectText: {
        position: "relative",
        color: "#fff",
        fontSize: 14,
        fontWeight: '600',
        zIndex: 1
    },

    collectDiv: {
        backgroundColor: "rgb(255, 112, 96)",
        height: 40,
        width: 82,
        borderRadius: 7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto"
    },

    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "60%",
        justifyContent: 'flex-start'
    },

    profilePicDiv: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    usernameText: {
        fontSize: 18,
        fontWeight: "900"
    }
});

export default styles;