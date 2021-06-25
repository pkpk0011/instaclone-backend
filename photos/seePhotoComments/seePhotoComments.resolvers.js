import client from "../../client";

export default {
    Query: {
        seePhotoComments: (_id, { id }) => 
        client.comment.findMany({
            where: {
                photoId: id,
            },
            // skip, cursor, 
            orderBy: {
                createdAt: "asc",
            },
        }),
    },
};