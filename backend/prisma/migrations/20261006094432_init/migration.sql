-- CreateEnum
CREATE TYPE "ImageType" AS ENUM ('HERO', 'GALLERY', 'SECTION');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'EASY_MODERATE', 'MODERATE', 'MODERATE_CHALLENGING', 'CHALLENGING');

-- CreateEnum
CREATE TYPE "ExperienceType" AS ENUM ('TREK', 'HIKE', 'CULTURAL', 'SIGHTSEEING', 'ACTIVITY');

-- CreateEnum
CREATE TYPE "ExperienceStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ExperienceRegion" AS ENUM ('EVEREST', 'ANNAPURNA', 'LANGTANG', 'MANASLU', 'KATHMANDU_VALLEY', 'POKHARA');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "experience_detail" (
    "id" UUID NOT NULL,
    "experience_id" UUID NOT NULL,
    "key" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "imageUrl" TEXT,
    "content" TEXT,
    "data" JSONB,

    CONSTRAINT "experience_detail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience_image" (
    "id" UUID NOT NULL,
    "experience_id" UUID NOT NULL,
    "url" TEXT,
    "storage_key" TEXT,
    "alt" TEXT,
    "type" "ImageType" NOT NULL DEFAULT 'GALLERY',
    "metadata" JSONB,

    CONSTRAINT "experience_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience_timeline" (
    "id" UUID NOT NULL,
    "experience_id" UUID NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "information" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experience_timeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience_timeline_item" (
    "id" UUID NOT NULL,
    "timeline_id" UUID NOT NULL,
    "order" INTEGER,
    "day_number" INTEGER,
    "title" TEXT,
    "data" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experience_timeline_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience_route" (
    "id" UUID NOT NULL,
    "experience_id" UUID NOT NULL,
    "geojson" JSONB,
    "start_coords" DOUBLE PRECISION[],
    "end_coords" DOUBLE PRECISION[],
    "distance_km" DECIMAL(7,2),
    "max_elevation_m" INTEGER,
    "ascentM" INTEGER,
    "descentM" INTEGER,
    "route_difficulty" "Difficulty",
    "source" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experience_route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experience" (
    "id" UUID NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ExperienceType" NOT NULL,
    "status" "ExperienceStatus" NOT NULL DEFAULT 'PUBLISHED',
    "short_description" TEXT NOT NULL,
    "duration_days" INTEGER NOT NULL,
    "min_days" INTEGER,
    "max_days" INTEGER,
    "difficulty" "Difficulty" NOT NULL,
    "difficulty_score" INTEGER,
    "thumbnail" TEXT,
    "max_elevation_m" INTEGER,
    "peak_season" INTEGER[],
    "price_npr" INTEGER,
    "region" "ExperienceRegion" NOT NULL,
    "start_point" TEXT,
    "interest" TEXT[],
    "activity" TEXT[],
    "is_popular" BOOLEAN NOT NULL DEFAULT false,
    "rating_avg" DECIMAL(3,2),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saved_recommendation" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "title" TEXT,
    "preferences" JSONB,
    "note" TEXT,
    "data" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "saved_recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "password_hash" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "first_name" TEXT,
    "middle_name" TEXT,
    "last_name" TEXT,
    "avatar_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oauth_account" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "provider_email" TEXT,
    "provider_email_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "oauth_account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "experience_detail_experience_id_idx" ON "experience_detail"("experience_id");

-- CreateIndex
CREATE UNIQUE INDEX "experience_detail_experience_id_key_key" ON "experience_detail"("experience_id", "key");

-- CreateIndex
CREATE INDEX "experience_image_experience_id_type_idx" ON "experience_image"("experience_id", "type");

-- CreateIndex
CREATE UNIQUE INDEX "experience_timeline_experience_id_key" ON "experience_timeline"("experience_id");

-- CreateIndex
CREATE INDEX "experience_timeline_item_timeline_id_idx" ON "experience_timeline_item"("timeline_id");

-- CreateIndex
CREATE UNIQUE INDEX "experience_route_experience_id_key" ON "experience_route"("experience_id");

-- CreateIndex
CREATE UNIQUE INDEX "experience_slug_key" ON "experience"("slug");

-- CreateIndex
CREATE INDEX "experience_duration_days_difficulty_idx" ON "experience"("duration_days", "difficulty");

-- CreateIndex
CREATE INDEX "experience_region_duration_days_idx" ON "experience"("region", "duration_days");

-- CreateIndex
CREATE INDEX "experience_max_elevation_m_idx" ON "experience"("max_elevation_m");

-- CreateIndex
CREATE INDEX "experience_is_popular_idx" ON "experience"("is_popular");

-- CreateIndex
CREATE INDEX "saved_recommendation_user_id_idx" ON "saved_recommendation"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profile_user_id_key" ON "profile"("user_id");

-- CreateIndex
CREATE INDEX "oauth_account_user_id_idx" ON "oauth_account"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "oauth_account_provider_provider_account_id_key" ON "oauth_account"("provider", "provider_account_id");

-- AddForeignKey
ALTER TABLE "experience_detail" ADD CONSTRAINT "experience_detail_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience_image" ADD CONSTRAINT "experience_image_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience_timeline" ADD CONSTRAINT "experience_timeline_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience_timeline_item" ADD CONSTRAINT "experience_timeline_item_timeline_id_fkey" FOREIGN KEY ("timeline_id") REFERENCES "experience_timeline"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experience_route" ADD CONSTRAINT "experience_route_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "experience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_recommendation" ADD CONSTRAINT "saved_recommendation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "oauth_account" ADD CONSTRAINT "oauth_account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
