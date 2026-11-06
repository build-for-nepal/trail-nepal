'use client';

import { Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { useAdminToast } from './AdminToast';
import { ApiError } from './api/client';
import { ConfirmDialog } from './ConfirmDialog';
import { useDeleteExperience } from './hooks/useAdminExperiences';
import { useDisclosure } from './hooks/useDisclosure';

export function ExperienceDeleteButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const { isOpen, open, close } = useDisclosure();
  const deleteMutation = useDeleteExperience();
  const { toast } = useAdminToast();

  const onConfirm = async () => {
    try {
      await deleteMutation.mutateAsync(id);
      close();
      toast({
        tone: 'success',
        title: 'Experience deleted',
        description: `${name} was permanently deleted.`,
      });
    } catch (error) {
      toast({
        tone: 'error',
        title: 'Could not delete experience',
        description:
          error instanceof ApiError
            ? error.message
            : 'Something went wrong. Try again.',
      });
    }
  };

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon-sm"
        aria-label={`Delete ${name}`}
        onClick={open}
      >
        <Trash2 className="size-4 text-destructive" />
      </Button>
      <ConfirmDialog
        open={isOpen}
        onOpenChange={(next) => {
          if (deleteMutation.isPending) return;
          if (next) open();
          else close();
        }}
        title={`Delete ${name}?`}
        description="This permanently deletes the experience, including its details, timeline, images and route. This cannot be undone."
        confirmLabel="Delete"
        pendingLabel="Deleting…"
        isPending={deleteMutation.isPending}
        destructive
        onConfirm={onConfirm}
      />
    </>
  );
}
