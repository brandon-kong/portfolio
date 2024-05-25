'use client';

import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';
import { useForm, ValidationError } from '@formspree/react';
import { Textarea } from '../textarea';
import React from 'react';

import ConfettiExplosion from 'confetti-explosion-react';

export default function EmailForm(): React.JSX.Element {
    const [state, handleSubmit] = useForm(
        process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID as string,
    );
    const formRef = React.useRef<HTMLFormElement>(null);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        handleSubmit(e).then(() => {
            formRef.current?.reset();
        });
    };

    return (
        <form
            ref={formRef}
            onSubmit={onSubmit}
            className={'flex flex-col gap-4'}
        >
            {state.errors && (
                <div
                    className={
                        'bg-destructive/10 text-foreground rounded-lg border border-destructive p-4'
                    }
                >
                    <ValidationError errors={state.errors} />
                </div>
            )}

            <div className={'space-y-2'}>
                <Label htmlFor="name">Name</Label>
                <Input
                    required
                    aria-required
                    type="text"
                    placeholder="Name"
                    name="Name"
                />
            </div>
            <div className={'space-y-2'}>
                <Label htmlFor="email">Email</Label>
                <Input
                    required
                    aria-required
                    type="email"
                    placeholder="Email"
                    name="Email"
                />
            </div>
            <div className={'space-y-2'}>
                <Label htmlFor="message">Message</Label>
                <Textarea required aria-required placeholder="Message" />
            </div>

            {state.succeeded && (
                <div
                    className={
                        'absolute w-full h-full flex justify-center items-center overflow-hidden top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2'
                    }
                >
                    <ConfettiExplosion width={3200} height={3200} />
                </div>
            )}

            <Button
                disabled={state.submitting}
                size={'lg'}
                variant={'secondary'}
                className={'w-full my-4'}
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
}
