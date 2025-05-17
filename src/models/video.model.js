import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoose from "mongoose";

const videoSchema =new Schema({
    videoFile:{
        type: String,
        required: true
    },
    thumbnail:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type: Number,
        default: 0
    },
    isPublished:{
        type:Boolean,
        default: true
    },
    Owner: {
        type: Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps: true})


videoSchema.plugin(mongooseAggregatePaginate)

export const Video =mongoose.model("Video",videoSchema)