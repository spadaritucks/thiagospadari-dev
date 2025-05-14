-- DropForeignKey
ALTER TABLE "ProjectsSkills" DROP CONSTRAINT "ProjectsSkills_project_id_fkey";

-- AddForeignKey
ALTER TABLE "ProjectsSkills" ADD CONSTRAINT "ProjectsSkills_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
