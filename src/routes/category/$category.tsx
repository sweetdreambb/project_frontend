import { createFileRoute } from '@tanstack/react-router'
import CategoryDetailPage from "../../ui/page/CategoryDetailPage";

export const Route = createFileRoute('/category/$category')({
  component: CategoryDetailPage,
})

